gsap.registerPlugin(ScrollTrigger);


const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

gsap.from("#hero-title", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".typewriter", {
  x: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power3.out"
});

gsap.from(".hero p", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 0.8,
  stagger: 0.2
});


gsap.utils.toArray(".skill-card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});

gsap.utils.toArray(".experience-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    x: i % 2 === 0 ? -50 : 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });
});

gsap.utils.toArray(".project-card").forEach((card) => {
  const img = card.querySelector("img");
  const content = card.querySelector("div:nth-child(2)");

  gsap.from(img, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    x: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(content, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
    },
    x: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    delay: 0.2
  });
});

gsap.matchMedia().add("(max-width: 375px)", () => {
  gsap.to(".hero p", { y: 20 });
});

