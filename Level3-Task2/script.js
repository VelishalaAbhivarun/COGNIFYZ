document.addEventListener("DOMContentLoaded", function () {
  const animatedSections = document.querySelectorAll(".section");
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 100 && rect.bottom > 60;
  }
  function checkSections() {
    animatedSections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("js-fade-in");
      }
    });
  }
  checkSections();
  window.addEventListener("scroll", checkSections);
  document.querySelectorAll(".animated-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";

      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });
});
