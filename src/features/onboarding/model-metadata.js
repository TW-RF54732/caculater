const MODEL_NAMES = Object.freeze({
    allocation: '資源配置模型（線性規劃 LP）',
    cost: '成本最小化模型（線性規劃 LP）',
    transport: '運輸模型（運輸問題 LP）',
    assignment: '指派模型（0-1 整數規劃）',
    blending: '混合模型（線性規劃 LP）',
    unsure: '尚未選定，請先描述你的問題'
});

export function getModelDisplayName(scenarioKey) {
    return MODEL_NAMES[scenarioKey] || '線性規劃模型（LP）';
}

// index.html still contains the legacy inline controller during the migration.
// Expose this small domain mapping until that controller is moved to a module.
window.getModelDisplayName = getModelDisplayName;
