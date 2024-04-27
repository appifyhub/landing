import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar",
            position: "bottom",
            equalWeightButtons: false,
            flipButtons: true
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: false,
            flipButtons: true
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "en",
        translations: {
            en: {
                consentModal: {
                    title: "Hello developer, it's cookie time!",
                    description: "We use cookies to improve your overall experience. We don't sell your data, but we do have analytics! The choice is yours, we recommend keeping the cookies on.",
                    closeIconLabel: "",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Settings",
                    footer: "<a href=\"privacy.html#cookies\">Privacy Policy</a>\n<a href=\"terms.html\">Terms of Service</a>"
                },
                preferencesModal: {
                    title: "Cookie Settings",
                    closeIconLabel: "",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "We use these cookies to make the website work.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "We use these cookies for Analytics.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "Refer to the <a class=\"cc__link\" href=\"privacy.html#cookies\">Cookie Notice</a>."
                        }
                    ]
                }
            }
        }
    },
    disablePageInteraction: true
});
