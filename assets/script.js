document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("language");
  const elements = document.querySelectorAll("[data-en]");

  // LocalStorage'dan veya varsayılan dili al
  const savedLanguage = localStorage.getItem("language") || "en";
  languageSelector.value = savedLanguage;
  changeLanguage(savedLanguage);

  languageSelector.addEventListener("change", function () {
    const selectedLanguage = this.value;
    localStorage.setItem("language", selectedLanguage);
    changeLanguage(selectedLanguage);
  });

  function changeLanguage(lang) {
    elements.forEach((element) => {
      if (element.dataset[lang]) {
        element.innerHTML = element.dataset[lang];
      } else {
        console.warn("Dil bulunamadı:", lang, element);
      }
    });
  }
});
