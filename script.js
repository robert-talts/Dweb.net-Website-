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
const FORMSPREE_ID = "mqagkyqa"; // e.g., "xrgvwdje"
const endpoint = FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : null;

if (form && endpoint){
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    statusEl.textContent = "Sending…";
    try {
      const res = await fetch(endpoint, { method: "POST", body: new FormData(form), headers: { "Accept": "application/json" }});
      if (res.ok){
        statusEl.textContent = "✅ Message sent! We'll get back to you soon.";
        form.reset();
      } else {
        statusEl.textContent = "❌ There was a problem. Email bob@dweb.net instead.";
      }
    } catch {
      statusEl.textContent = "❌ Network error. Please email bob@dweb.net.";
    }
  });
} else if (form){
  statusEl.textContent = "";
}
