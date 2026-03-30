function initLanguageSwitcher() {
    const languageSelect = document.getElementById("language-switcher");

    if (!languageSelect) {
        console.log("Language switcher not found");
        return;
    }

    // Translation Data
    const translations = {
        en: {
            heroTitle: "Full-Stack Developer | MERN Enthusiast | Competitive Programmer",
            projectsTitle: "My Projects",
            skillsTitle: "Skills",
            contactTitle: "Contact Me"
        },
        hi: {
            heroTitle: "फुल-स्टैक डेवलपर | MERN उत्साही | प्रतिस्पर्धी प्रोग्रामर",
            projectsTitle: "मेरे प्रोजेक्ट्स",
            skillsTitle: "कौशल",
            contactTitle: "संपर्क करें"
        }
    };

    // Elements to translate
    const elements = {
        heroTitle: document.querySelector("#home p"),
        projectsTitle: document.querySelector("#projects h2"),
        skillsTitle: document.querySelector("#skills h2"),
        contactTitle: document.querySelector("#contact h3")
    };

    // Apply language
    function applyLanguage(lang) {
        const selectedLang = translations[lang];

        Object.keys(elements).forEach(key => {
            if (elements[key]) {
                elements[key].textContent = selectedLang[key];
            }
        });

        localStorage.setItem("portfolio-language", lang);
    }

    // Load saved language
    const savedLang = localStorage.getItem("portfolio-language") || "en";
    languageSelect.value = savedLang;
    applyLanguage(savedLang);

    // Change language
    languageSelect.addEventListener("change", function () {
        applyLanguage(this.value);
    });

    console.log("Language switcher initialized");
}