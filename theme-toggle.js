(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", initial);

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;

    const icons = {
      light: '<i class="fa-regular fa-sun"></i>',
      dark: '<i class="fa-regular fa-moon"></i>',
    };

    const setUI = (theme) => {
      btn.setAttribute("aria-pressed", String(theme === "dark"));
      btn.title = theme === "dark" ? "Dark mode" : "Light mode";
      btn.innerHTML = icons[theme];
    };

    setUI(initial);

    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      setUI(next);
    });
  });
})();
