/* ==========================================================================
   BeJo — Landing interactions: parallax, scroll reveal, sticky header, menu
   ========================================================================== */
(function () {
  "use strict";

  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Sticky header state ------------------------------------------- */
  var header = document.getElementById("header");
  function onScrollHeader() {
    if (window.scrollY > 24) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }

  /* ---- Mobile menu ---------------------------------------------------- */
  var toggle = document.getElementById("menuToggle");
  var navLinks = document.getElementById("navLinks");
  if (toggle) {
    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") navLinks.classList.remove("open");
    });
  }

  /* ---- Scroll reveal (IntersectionObserver) --------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReduced) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---- Parallax ------------------------------------------------------- */
  var parallaxEls = Array.prototype.slice.call(
    document.querySelectorAll("[data-parallax]")
  );

  // Cache each element's section offset so we translate relative to it
  function measure(el) {
    var rect = el.getBoundingClientRect();
    el.__center = rect.top + window.scrollY + rect.height / 2;
    el.__speed = parseFloat(el.getAttribute("data-parallax")) || 0;
  }
  parallaxEls.forEach(measure);

  var ticking = false;
  function updateParallax() {
    var viewportCenter = window.scrollY + window.innerHeight / 2;
    for (var i = 0; i < parallaxEls.length; i++) {
      var el = parallaxEls[i];
      var delta = viewportCenter - el.__center;
      var y = delta * el.__speed * -1;
      el.style.transform = "translate3d(0," + y.toFixed(1) + "px,0)";
    }
    ticking = false;
  }

  function requestParallax() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    }
  }

  function onScroll() {
    onScrollHeader();
    if (!prefersReduced) requestParallax();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener(
    "resize",
    function () {
      parallaxEls.forEach(measure);
      requestParallax();
    },
    { passive: true }
  );

  // Initial paint
  onScrollHeader();
  if (!prefersReduced) {
    updateParallax();
  }

  /* ---- Smooth active-year in footer (auto) ---------------------------- */
  var yearNodes = document.querySelectorAll("[data-year]");
  yearNodes.forEach(function (n) {
    n.textContent = new Date().getFullYear();
  });
})();
