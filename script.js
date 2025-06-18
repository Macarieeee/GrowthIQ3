
const langBtn = document.getElementById("lang-btn");

function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll(".lang").forEach(el => {
    el.classList.add("hide");
    el.classList.remove("show");
  });

  document.querySelectorAll("." + lang).forEach(el => {
    el.classList.remove("hide");
    el.classList.add("show");
  });

  langBtn.textContent = lang === "ro" ? "EN" : "RO";
}

langBtn.addEventListener("click", () => {
  const newLang = localStorage.getItem("lang") === "ro" ? "en" : "ro";
  setLanguage(newLang);
});

document.addEventListener("DOMContentLoaded", () => {
  const currentLang = localStorage.getItem("lang") || "ro";
  setLanguage(currentLang);
});
