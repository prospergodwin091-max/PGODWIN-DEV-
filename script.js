// Dark/Light Mode
const toggle = document.getElementById('theme-toggle');
if(toggle){
  toggle.onclick = () => {
    document.documentElement.classList.toggle('dark');
    toggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
  }
}
// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if(menuBtn){
  menuBtn.onclick = () => {
    mobileMenu.classList.toggle('hidden');
    menuBtn.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
  }
}

// WhatsApp Form
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let whatsappMessage = `New Client Inquiry%0AName: ${name}%0AEmail: ${email}%0AProject: ${message}`;
    window.open(`https://wa.me/2348063998586?text=${whatsappMessage}`, '_blank');
  });
}