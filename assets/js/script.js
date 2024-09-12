// Typed.js
var typed = new Typed('.study-field h2', {
  strings: ['Software Engineer', 'Web Developer', 'Aspiring Mobile Developer'],
  loop: true, typeSpeed: 70, backSpeed: 10,
});

// switch the section
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const activeLink = document.querySelector('nav ul li a.active');
    const activeSection = document.querySelector('main > section.active');
    const targetSection = document.querySelector(`main > section${link.getAttribute('href')}`);

    //remove class 'active from both the link and section
    activeLink.classList.remove('active');
    activeSection.classList.remove('active');

    //remove class 'active from both the link and section
    link.classList.add('active');
    targetSection.classList.add('active');
  })
});

// Contact form sending
function eMail(){
  let parms = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  }
  emailjs.send('service_o2ncz9q', 'template_vi19chb', parms).then(alert('Message sent!'))
}