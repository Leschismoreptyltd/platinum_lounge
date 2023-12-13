//Sticky menu bar
window.addEventListener('scroll', function () {
    const menuBar = document.getElementById('sticky-menu');
  
    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
      menuBar.classList.add('fixed');
    } else {
      menuBar.classList.remove('fixed');
    }
  });

