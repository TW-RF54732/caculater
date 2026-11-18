const SUBSCRIPT_DIGITS = Object.freeze({
    '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
    '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
});

export function fmtNum(value, decimals = 4) {
    if (value === null || value === undefined || Number.isNaN(value)) return '0';
    if (Math.abs(value) < 1e-9) return '0';
    const factor = 10 ** decimals;
    return (Math.round(value * factor) / factor).toString();
}

export function subDigit(value) {
    return String(value).split('').map(character => SUBSCRIPT_DIGITS[character] || character).join('');
}

window.fmtNum = fmtNum;
window.subDigit = subDigit;
