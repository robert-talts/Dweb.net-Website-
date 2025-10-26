// Enhancements + Formspree example
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (menuBtn && menu){
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

// Contact form via Formspree (replace YOUR_FORM_ID)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
const FORMSPREE_ID = "YOUR_FORM_ID"; // e.g., "xrgvwdje"
const endpoint = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : null;

if (form && endpoint){
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = "Sending...";
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      });
      if (res.ok){
        statusEl.textContent = "Thanks! We received your message.";
        form.reset();
      } else {
        statusEl.textContent = "Sorry—there was a problem. Email bob@dweb.net instead.";
      }
    } catch (err){
      statusEl.textContent = "Network error. Please email bob@dweb.net.";
    }
  });
} else if (form){
  statusEl.innerHTML = 'Set up Formspree by replacing <code>YOUR_FORM_ID</code> in <code>script.js</code>.';
}
