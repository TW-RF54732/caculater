export const guidedScenarioKeys = Object.freeze(['allocation', 'cost', 'transport', 'assignment', 'blending', 'unsure']);

export const guidedScenarioModels = Object.freeze({
    allocation: { model: 'linear-programming', objective: 'max' },
    cost: { model: 'linear-programming', objective: 'min' },
    transport: { model: 'transportation', objective: 'min' },
    assignment: { model: 'binary-integer-programming', objective: 'min' },
    blending: { model: 'linear-programming', objective: 'min' },
    unsure: { model: null, objective: null }
});
