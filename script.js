document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('nav-open');
    });
  }

  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.textContent = "Thanks — we've received your details and will follow up within 24–72 hours.";
      form.reset();
    });
  }
});
