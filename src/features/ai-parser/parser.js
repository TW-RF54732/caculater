export function parseObjectiveType(text) {
    return /min|成本|最少|最小/i.test(text) ? 'min' : 'max';
}

export function parseSimpleTwoVariableModel(text) {
    return {
        type: parseObjectiveType(text),
        sourceText: text,
        supported: /x\s*1|x_?1/i.test(text) && /x\s*2|x_?2/i.test(text)
    };
}
