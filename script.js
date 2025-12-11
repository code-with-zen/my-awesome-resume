document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navHeight = document.querySelector(".navbar").offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
