// Tungi / kunduzgi rejim
// Bu qism sahifa chizilishidan oldin ishlaydi, shuning uchun ekran "miltillamaydi"
const root = document.documentElement;

function getSavedTheme() {
  try { return localStorage.getItem("theme"); } catch (e) { return null; }
}

function saveTheme(theme) {
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

// Standart holatda yorug' rejim; foydalanuvchi tungi rejimni tanlagan bo'lsa, o'sha eslab qolinadi
applyTheme(getSavedTheme() || "light");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  applyTheme(root.getAttribute("data-theme"));
  btn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    saveTheme(next);
    // Ikonkani aylantirish (ketma-ket bosilganda ham qayta ishlaydi)
    btn.classList.remove("spin");
    void btn.offsetWidth;
    btn.classList.add("spin");
  });

  // Skroll qilganda elementlarni silliq ko'rsatish
  const revealItems = document.querySelectorAll(".hero-grid > div, .section-head, .about-item, .service, .contact-box");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    revealItems.forEach(el => {
      // Yonma-yon kartalar birin-ketin chiqadi
      const index = [...el.parentElement.children].indexOf(el);
      el.style.setProperty("--d", index * 0.12 + "s");
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  // Footerdagi yilni avtomatik yangilash
  document.getElementById("year").textContent = new Date().getFullYear();

  // Menyudagi faol bo'limni belgilash
  const links = document.querySelectorAll(".nav-links a");
  const sections = [...links].map(link => document.querySelector(link.getAttribute("href")));

  window.addEventListener("scroll", () => {
    const y = window.scrollY + 120;
    sections.forEach((section, i) => {
      const active = section.offsetTop <= y && section.offsetTop + section.offsetHeight > y;
      links[i].classList.toggle("active", active);
    });
  });
});
