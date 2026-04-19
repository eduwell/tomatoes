function setLang(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-" + lang + "]").forEach(el => {
    el.innerText = el.getAttribute("data-" + lang);
  });

  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.style.opacity = "0.5";
  });

  document.getElementById("btn-" + lang).style.opacity = "1";
}

window.onload = () => {
  const lang = localStorage.getItem("lang") || "fr";
  setLang(lang);
};