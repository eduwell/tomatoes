function setLang(lang) {
  localStorage.setItem("lang", lang);

  // Remplace uniquement les éléments qui ont la langue cible
  document.querySelectorAll(`[data-${lang}]`).forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.textContent = text; // plus sûr que innerText
    }
  });

  // Reset opacity boutons (si présents)
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.style.opacity = "0.5";
  });

  // Active bouton courant (sécurisé)
  const activeBtn = document.getElementById(`btn-${lang}`);
  if (activeBtn) {
    activeBtn.style.opacity = "1";
  }
}

// ⚡ Plus rapide que window.onload
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "cz"; // 👉 tchèque par défaut
  setLang(lang);
});
