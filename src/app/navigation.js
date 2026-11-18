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

window.setWorkspaceNavigationVisible = setWorkspaceNavigationVisible;
window.setSidebarActive = setSidebarActive;
window.showGuidedInputPage = showGuidedInputPage;
