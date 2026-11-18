import { validateLpModel } from './lp-model.js';

/**
 * Stable solver boundary used by feature controllers.
 * During migration it delegates to the existing browser solver when present.
 */
export function solveLpModel(model) {
    const validation = validateLpModel(model);
    if (!validation.valid) {
        return { status: 'invalid', errors: validation.errors, x: [], z: 0, constraints: [] };
    }
    if (typeof window !== 'undefined' && typeof window.solveFullLPModel === 'function') {
        return window.solveFullLPModel(model);
    }
    return { status: 'unavailable', errors: ['LP solver has not been loaded'], x: [], z: 0, constraints: [] };
}

export function solveContinuousModel(model) {
    if (typeof window !== 'undefined' && typeof window.solveContinuousLP === 'function') {
        return window.solveContinuousLP(model);
    }
    return solveLpModel(model);
}
