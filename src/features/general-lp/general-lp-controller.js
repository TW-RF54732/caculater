import { solveLpModel } from '../../domain/lp-solver.js';

export function solveGeneralModel(model) {
    return solveLpModel(model);
}

export function openGeneralEditor() {
    window.switchMainTab?.('general');
}
