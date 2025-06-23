// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').length > 1) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      document.querySelector('nav ul').classList.remove('active');
    }
  });
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message, Pratima will get back to you soon!');
    this.reset();
  });
}
