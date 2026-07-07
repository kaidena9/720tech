/* 720Tech — nav scroll · mobile menu · scroll reveals · contact form */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var nav = document.getElementById("nav");
  function onScroll(){ nav.classList.toggle("scrolled", window.scrollY > 20); }
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  var btn = document.getElementById("menuBtn");
  var menu = document.getElementById("mobile");
  function setMenu(open){
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("open", open);
    menu.hidden = !open;
  }
  if (btn) {
    btn.addEventListener("click", function(){ setMenu(btn.getAttribute("aria-expanded") !== "true"); });
    menu.addEventListener("click", function(e){ if (e.target.closest("a")) setMenu(false); });
    window.addEventListener("keydown", function(e){ if (e.key === "Escape") setMenu(false); });
    window.addEventListener("resize", function(){ if (window.innerWidth > 760) setMenu(false); });
  }

  var els = document.querySelectorAll(".reveal, .seam-draw");
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach(function(el){ el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function(entries, obs){
      entries.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add("in"); obs.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function(el){ io.observe(el); });
  }

  /* count-up on stats when they scroll into view */
  function fmt(n){ return n.toLocaleString("en-US"); }
  function countUp(el){
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var prefix = el.getAttribute("data-prefix") || "";
    if (reduce || target <= 2){ el.textContent = prefix + fmt(target) + suffix; return; }
    var dur = 1400, start = null;
    function step(ts){
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + fmt(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + fmt(target) + suffix;
    }
    requestAnimationFrame(step);
  }
  var stats = document.querySelectorAll(".statnum[data-count]");
  if (stats.length){
    if (reduce || !("IntersectionObserver" in window)){
      stats.forEach(function(el){ el.textContent = (el.getAttribute("data-prefix") || "") + fmt(parseFloat(el.getAttribute("data-count")) || 0) + (el.getAttribute("data-suffix") || ""); });
    } else {
      var sio = new IntersectionObserver(function(entries, obs){
        entries.forEach(function(en){ if (en.isIntersecting){ countUp(en.target); obs.unobserve(en.target); } });
      }, { threshold: 0.6 });
      stats.forEach(function(el){ sio.observe(el); });
    }
  }

  /* cursor-tracking spotlight on premium glass panels */
  document.querySelectorAll(".spot").forEach(function(el){
    el.addEventListener("pointermove", function(e){
      var r = el.getBoundingClientRect();
      el.style.setProperty("--mx", (e.clientX - r.left) + "px");
      el.style.setProperty("--my", (e.clientY - r.top) + "px");
    });
  });
})();
