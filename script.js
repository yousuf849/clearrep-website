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
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      note.textContent = "Sending...";

      const data = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          note.textContent = "Thanks — we've received your details and will follow up within 24–72 hours.";
          note.style.color = '#3FA873';
          form.reset();
        } else {
          note.textContent = "Something went wrong. Please try again.";
          note.style.color = '#C8392B';
        }
      } catch (err) {
        note.textContent = "Something went wrong. Please try again.";
        note.style.color = '#C8392B';
      }
    });
  }
});
