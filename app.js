document.addEventListener("DOMContentLoaded", function () {
  var options = {
      strings: ["Frontend Developer", "Designer","Web Developer"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
  };

  var typed = new Typed("#typed", options);
});
//navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

//back to top
// Show or hide the back-to-top button based on scroll position
window.addEventListener('scroll', function() {
  const btt = document.querySelector('.btt');
  if (window.scrollY > 300) { // Adjust this value as needed
    btt.style.display = 'block';
  } else {
    btt.style.display = 'none';
  }
});

// Smooth scroll back to top
document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


