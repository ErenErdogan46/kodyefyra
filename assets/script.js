document.addEventListener("DOMContentLoaded", function() {
    const langSelect = document.getElementById("language");
    const elements = document.querySelectorAll("[data-en]");

    function updateLanguage(lang) {
        elements.forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`) || "N/A";
        });
    }

    langSelect.addEventListener("change", function() {
        updateLanguage(this.value);
        localStorage.setItem("selectedLanguage", this.value);
    });

    // Sayfa yüklenince önceki dil ayarını koru
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    langSelect.value = savedLang;
    updateLanguage(savedLang);
});
