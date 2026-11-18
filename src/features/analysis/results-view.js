import { fmtNum } from '../../ui/formatters.js';

export function renderSolutionSummary(container, solution) {
    if (!container) return;
    if (!solution || solution.status !== 'optimal') {
        container.textContent = solution?.status || 'unavailable';
        return;
    }
    container.textContent = `Z = ${fmtNum(solution.z)}`;
}
