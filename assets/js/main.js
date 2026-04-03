$(document).ready(function(){

  var owl = $(".portfolio-carousel");

  owl.owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    autoplay:true,

    responsive:{
      0:{ items:1 },
      768:{ items:2 }
    }
  });

  $("#nextBtn").click(function(){
    owl.trigger("next.owl.carousel");
  });

  $("#prevBtn").click(function(){
    owl.trigger("prev.owl.carousel");
  });

});

// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    window.scrollTo({
      top: target.offsetTop - 80, // adjust navbar height
      behavior: 'smooth'
    });
  });
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade-up, .fade-down, .fade-left, .fade-right')
  .forEach(el => observer.observe(el));



  (function(){
    emailjs.init("7VVirm8fwh10b6KQp"); // your public key
  })();

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const btn = document.getElementById("submitBtn");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    btn.innerText = "Sending...";
    btn.disabled = true;
    status.innerText = "";

    emailjs.sendForm(
      "service_tovtkjm",
      "template_cchsme7",
      this
    )
    .then(function() {
      status.style.color = "green";
      status.innerText = "Inquiry sent successfully!";
      form.reset();
      btn.innerText = "Submit";
      btn.disabled = false;
    }, function(error) {
      console.error(error);
      status.style.color = "red";
      status.innerText = "Failed to send inquiry.";
      btn.innerText = "Submit";
      btn.disabled = false;
    });

  });
$(document).ready(function(){

  var owl = $(".testimonial-slider");

  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 25,
    dots: false,
    nav: false,
    autoplay:true,
    smartSpeed: 700,
    responsive: {
      0: { items: 1 },
      768: { items: 2 }
    }
  });

  $("#nextTesti").click(function(){
    owl.trigger("next.owl.carousel");
  });

  $("#prevTesti").click(function(){
    owl.trigger("prev.owl.carousel");
  });

});
// ===== SCROLL REVEAL =====
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("active");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", function(){
  const nav = document.querySelector(".nav-wrapper");
  if(window.scrollY > 50){
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});

// ===== OWL CAROUSEL =====
$(document).ready(function(){



  $(".testimonial-slider").owlCarousel({
    loop:true,
    items:1,
    nav:false
  });

  $("#nextTesti").click(function(){
    $(".testimonial-slider").trigger("next.owl.carousel");
  });

  $("#prevTesti").click(function(){
    $(".testimonial-slider").trigger("prev.owl.carousel");
  });

});

// ===== CONTACT FORM (EMAILJS) =====
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // replace
})();

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.innerText = "Sending...";

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
  .then(() => {
    status.innerText = "Message sent successfully!";
    this.reset();
  })
  .catch(() => {
    status.innerText = "Failed to send. Try again.";
  });
});

// ===== CLEAN SMOOTH SCROLL (NO CONFLICT) =====
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    const targetId = this.getAttribute("href");

    // skip empty links
    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    const navbarHeight = document.querySelector(".nav-wrapper").offsetHeight;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition = targetPosition - navbarHeight - 10;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

  });

});
// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// CLOSE MENU WHEN CLICK LINK
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});