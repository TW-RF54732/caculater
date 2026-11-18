import test from 'node:test';
import assert from 'node:assert/strict';
import { createTransportModel, isBalancedTransport } from '../../src/domain/transport-model.js';

const state = {
    numSources: 1,
    numDests: 2,
    sourceNames: ['S1'],
    destNames: ['A', 'B'],
    supplies: [10],
    demands: [4, 6],
    costs: [[2, 3]]
};

test('builds a balanced transport LP', () => {
    const model = createTransportModel(state);
    assert.equal(model.numVars, 2);
    assert.equal(model.constraints.length, 3);
    assert.equal(isBalancedTransport(state), true);
});
