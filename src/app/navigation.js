export function setWorkspaceNavigationVisible(visible) {
    document.getElementById('workspace-shell')?.classList.toggle('sidebar-hidden', !visible);
}

export function setSidebarActive(target) {
    document.querySelectorAll('[data-sidebar-target]').forEach(button => {
        const isActive = button.dataset.sidebarTarget === target;
        button.classList.toggle('active', isActive);
        if (isActive) {
            button.setAttribute('aria-current', 'page');
        } else {
            button.removeAttribute('aria-current');
        }
    });
}

export function showGuidedInputPage() {
    setWorkspaceNavigationVisible(true);
    document.getElementById('view-onboarding')?.classList.remove('hidden');
    document.getElementById('view-general')?.classList.add('hidden');
    document.getElementById('view-transport')?.classList.add('hidden');
    document.getElementById('view-templates')?.classList.add('hidden');
    document.getElementById('advanced-tools-menu')?.classList.add('hidden');
    document.getElementById('nav-btn-home')?.classList.add('bg-cyan-600', 'text-white');
    setSidebarActive('input');
}

export function toggleAdvancedTools() {
    document.getElementById('advanced-tools-menu')?.classList.toggle('hidden');
}

export function showOnboardingPage() {
    document.getElementById('view-onboarding')?.classList.remove('hidden');
    document.getElementById('view-general')?.classList.add('hidden');
    document.getElementById('view-transport')?.classList.add('hidden');
    document.getElementById('view-templates')?.classList.add('hidden');
    document.getElementById('advanced-tools-menu')?.classList.add('hidden');
    document.getElementById('nav-btn-home')?.classList.add('bg-cyan-600', 'text-white');
    setSidebarActive('onboarding');
    window.resetGuidedPicker?.();
}

export function openGuidedEditor() {
    window.switchMainTab?.('general');
}

export function navigateSidebar(target) {
    // 檢查目前是否顯示運輸與配送模型畫面
    const isTransportView = !document.getElementById('view-transport')?.classList.contains('hidden');
    
    const viewTargets = {
        formula: isTransportView ? ['transport', 'tp-math-model-box'] : ['general', 'formula-section'],
        analysis: isTransportView ? ['transport', 'tp-results-section'] : ['general', 'results-section'],
        graph: isTransportView ? ['transport', 'tp-results-section'] : ['general', 'graphical-analysis-card'],
        transport: ['transport', null],
        templates: ['templates', null]
    };

    if (target === 'onboarding') {
        showOnboardingPage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    if (target === 'input') {
        showGuidedInputPage();
        const sectionId = guidedScenario ? 'guided-details' : 'guided-picker';
        requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
        return;
    }

    const [tab, sectionId] = viewTargets[target] || viewTargets.formula;
    switchMainTab(tab);
    setSidebarActive(target);
    if (sectionId) {
        requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

export function syncSidebarToScroll() {
    const shell = document.getElementById('workspace-shell');
    if (!shell || shell.classList.contains('sidebar-hidden')) return;

    const generalView = document.getElementById('view-general');
    const transportView = document.getElementById('view-transport');
    
    // 如果一般檢視與運輸檢視同時隱藏（例如在首頁 onboarding），才重設為 input
    if (generalView?.classList.contains('hidden') && transportView?.classList.contains('hidden')) {
        setSidebarActive('input');
        return;
    }

    const isTransport = !transportView?.classList.contains('hidden');
    const sectionTargets = isTransport
        ? [
            ['formula', 'tp-math-model-box'],
            ['analysis', 'tp-results-section']
        ]
        : [
            ['input', 'input-section'],
            ['formula', 'formula-section'],
            ['analysis', 'results-section'],
            ['graph', 'graphical-analysis-card']
        ];

    const threshold = 140;
    let activeTarget = sectionTargets[0][0];
    sectionTargets.forEach(([target, id]) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= threshold) {
            activeTarget = target;
        }
    });
    setSidebarActive(activeTarget);
}

let scrollSyncPending = false;
window.addEventListener('scroll', () => {
    if (scrollSyncPending) return;
    scrollSyncPending = true;
    window.requestAnimationFrame(() => {
        scrollSyncPending = false;
        syncSidebarToScroll();
    });
}, { passive: true });

window.addEventListener('resize', syncSidebarToScroll);

window.setWorkspaceNavigationVisible = setWorkspaceNavigationVisible;
window.setSidebarActive = setSidebarActive;
window.showGuidedInputPage = showGuidedInputPage;
window.toggleAdvancedTools = toggleAdvancedTools;
window.showOnboardingPage = showOnboardingPage;
window.openGuidedEditor = openGuidedEditor;
window.syncSidebarToScroll = syncSidebarToScroll;
