document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("language");
  const elements = document.querySelectorAll("[data-lang]");

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
      element.innerHTML = element.dataset[lang];
    });
  }
});
