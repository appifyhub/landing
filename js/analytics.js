const measurementIds = {
    'www.appifyhub.com': 'G-6MV2ZG3WDM',
    'staging.www.appifyhub.com': 'G-H4RH8HN62X'
};

const measurementId = measurementIds[window.location.hostname];

if (measurementId) {
    console.log(`Enabling Google Analytics for ${window.location.hostname}…`);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    const googleTag = document.createElement('script');
    googleTag.async = true;
    googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.append(googleTag);
} else {
    console.log(`Google Analytics is disabled for ${window.location.hostname}.`);
}
