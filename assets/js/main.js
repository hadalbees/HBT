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
    margin: 20,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 800
  });

  // CUSTOM BUTTONS
  $("#nextTesti").click(function(){
    owl.trigger("next.owl.carousel");
  });

  $("#prevTesti").click(function(){
    owl.trigger("prev.owl.carousel");
  });

});
