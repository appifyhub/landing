const measurementIds = {
    'www.appifyhub.com': 'G-6MV2ZG3WDM',
    'staging.www.appifyhub.com': 'G-H4RH8HN62X'
};

const measurementId = measurementIds[window.location.hostname];

function initializeSectionTracking() {
    const sections = Array.from(document.querySelectorAll('[data-analytics-section]'));

    if (!sections.length || !('IntersectionObserver' in window)) {
        return;
    }

    const visibleSections = new Set();
    const trackedSections = new Set();
    const sectionTimers = new Map();

    const cancelSectionTimer = (section) => {
        const timerId = sectionTimers.get(section);

        if (timerId === undefined) {
            return;
        }

        window.clearTimeout(timerId);
        sectionTimers.delete(section);
    };

    const scheduleSectionView = (section) => {
        if (
            trackedSections.has(section) ||
            sectionTimers.has(section) ||
            document.visibilityState !== 'visible'
        ) {
            return;
        }

        const timerId = window.setTimeout(() => {
            sectionTimers.delete(section);

            if (!visibleSections.has(section) || document.visibilityState !== 'visible') {
                return;
            }

            trackedSections.add(section);
            window.gtag('event', 'section_view', {
                section_id: section.dataset.analyticsSection
            });
        }, 1000);

        sectionTimers.set(section, timerId);
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                visibleSections.add(entry.target);
                scheduleSectionView(entry.target);
            } else {
                visibleSections.delete(entry.target);
                cancelSectionTimer(entry.target);
            }
        }
    }, {
        rootMargin: '-35% 0px -35% 0px'
    });

    for (const section of sections) {
        sectionObserver.observe(section);
    }

    document.addEventListener('visibilitychange', () => {
        for (const timerId of sectionTimers.values()) {
            window.clearTimeout(timerId);
        }

        sectionTimers.clear();

        if (document.visibilityState === 'visible') {
            for (const section of visibleSections) {
                scheduleSectionView(section);
            }
        }
    });
}

function initializeInteractionTracking() {
    document.addEventListener('click', (event) => {
        if (!(event.target instanceof Element)) {
            return;
        }

        const interactiveElement = event.target.closest('[data-analytics-id]');

        if (!interactiveElement) {
            return;
        }

        const areaElement = interactiveElement.closest('[data-analytics-section], [data-analytics-area]');
        const eventParameters = {
            element_id: interactiveElement.dataset.analyticsId,
            element_type: interactiveElement.tagName.toLowerCase(),
            element_area: areaElement?.dataset.analyticsSection || areaElement?.dataset.analyticsArea || 'page'
        };

        if (interactiveElement instanceof HTMLAnchorElement) {
            eventParameters.link_url = interactiveElement.href;
        }

        window.gtag('event', 'ui_click', eventParameters);
    });
}

if (measurementId) {
    console.log(`Enabling Google Analytics for ${window.location.hostname}…`);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', measurementId);
    initializeSectionTracking();
    initializeInteractionTracking();

    const googleTag = document.createElement('script');
    googleTag.async = true;
    googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(googleTag);
} else {
    console.log(`Google Analytics is disabled for ${window.location.hostname}.`);
}
