import { createTransportModel, isBalancedTransport } from '../../domain/transport-model.js';
import { solveLpModel } from '../../domain/lp-solver.js';

export function solveTransport(state) {
    return solveLpModel(createTransportModel(state));
}

export function getTransportStatus(state) {
    return isBalancedTransport(state) ? 'balanced' : 'unbalanced';
}
