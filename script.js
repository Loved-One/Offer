// JavaScript for parallax effect
window.addEventListener('scroll', function() {
    let parallax = document.querySelector('.parallax-background');
    let scrollPosition = window.pageYOffset;
  
    // Adjust the background position to create parallax effect
    parallax.style.transform = `translate(-50%, -50%) translateY(${scrollPosition * 0.3}px)`;
  });
  