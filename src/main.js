import './app/navigation.js';
import './domain/lp-model.js';
import './domain/transport-model.js';
import './features/onboarding/model-metadata.js';
import './ui/formatters.js';
import './ui/toast.js';

/**
 * Application entry point for the modular layers.
 * The legacy inline controller remains the compatibility runtime while the
 * feature controllers are moved into modules incrementally.
 */
export function startApp() {
    document.documentElement.dataset.appReady = 'true';
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp, { once: true });
} else {
    startApp();
}
