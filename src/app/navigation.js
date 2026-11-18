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

window.setWorkspaceNavigationVisible = setWorkspaceNavigationVisible;
window.setSidebarActive = setSidebarActive;
