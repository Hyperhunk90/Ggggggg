// Wise Tax & Accounting Services, LLC — site behavior
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector("[data-menu-toggle]");
  var mobileNav = document.querySelector("[data-mobile-nav]");
  var closeBtn = document.querySelector("[data-menu-close]");

  function openMenu() {
    if (!mobileNav) return;
    mobileNav.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    if (!mobileNav) return;
    mobileNav.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  if (toggle) toggle.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (mobileNav) {
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }

  // Scroll reveal (progressive enhancement — see .js .reveal in style.css)
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
  // Safety net: guarantee nothing stays hidden if an observer never fires
  // (e.g. an element that's never scrolled into view on a short page).
  setTimeout(function () {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
      el.classList.add("is-visible");
    });
  }, 2000);

  // Footer year
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
