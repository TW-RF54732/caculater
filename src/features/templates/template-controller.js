import { templateKeys } from '../../data/templates.js';

export function isSupportedTemplate(name) {
    return templateKeys.includes(name);
}

export function loadTemplate(name) {
    if (!isSupportedTemplate(name)) return false;
    window.loadTemplateModel?.(name);
    return true;
}
