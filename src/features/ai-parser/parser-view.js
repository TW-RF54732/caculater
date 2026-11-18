import { parseSimpleTwoVariableModel } from './parser.js';

export function parseFromInput(input) {
    return parseSimpleTwoVariableModel(input?.value || '');
}
