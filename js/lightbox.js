document.addEventListener("DOMContentLoaded", function () {
  var lb = document.getElementById("lightbox");
  if (!lb) return;
  var lbImg = lb.querySelector("img");
  var lbCap = lb.querySelector(".lb-cap");

  function openLB(src, cap) {
    lbImg.src = src;
    lbCap.textContent = cap || "";
    lb.classList.add("open");
  }
  function closeLB() {
    lb.classList.remove("open");
    lbImg.src = "";
  }

  document.querySelectorAll(".thumb").forEach(function (t) {
    t.addEventListener("click", function () {
      var full = t.getAttribute("data-full") || t.querySelector("img").src;
      var cap = t.getAttribute("data-caption") || "";
      openLB(full, cap);
    });
  });

  lb.addEventListener("click", function (e) {
    if (e.target === lb || e.target.classList.contains("lb-close")) closeLB();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLB();
  });
});
