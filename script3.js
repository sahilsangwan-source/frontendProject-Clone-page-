function home() {
  gsap.set(".slidesm", { scale: 6 });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });
  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "anim"
  );
  tl.to(
    ".slidesm",
    {
      scale: 1,
    },
    "anim"
  );
  tl.to(
    ".rgt",
    {
      xPercent: 10,
      stagger: 0.03,
      ease: Power4,
    },
    "a"
  );
  tl.to(
    ".lft",
    {
      xPercent: -10,
      stagger: 0.03,
      ease: Power4,
    },
    "a"
  );
}

function real() {
  gsap.to(".slidef", {
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power4,
    duration: 4,
  });
}

function team() {
  document.querySelectorAll(".listelem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        ease: Power4,
        duration: 0.5,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
      });
    });
    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capsule() {
  gsap.to(".capsule2", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 90%",
      end: "bottom bottom",
      srcub: 1,
    },
    y: 0,
    ease: Power4,
  });
}

document.querySelectorAll(".section").forEach(function (e) {
  ScrollTrigger.create({
    trigger: e,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: function () {
      document.body.setAttribute("theme", e.dataset.color);
    },
    onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
    },
  });
});

loco();
home();
real();
team();
capsule();
