//Sticky menu bar
window.addEventListener('scroll', function () {
    const menuBar = document.getElementById('sticky-menu');
  
    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
      menuBar.classList.add('fixed');
    } else {
      menuBar.classList.remove('fixed');
    }
  });

  let currentSlide = 1;

  //slide show
function showSlide(n) {
  const slides = document.getElementsByClassName('carousel-slide');
  
  if (n > slides.length) {
    currentSlide = 1;
  } else if (n < 1) {
    currentSlide = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[currentSlide - 1].style.display = 'block'; 
}

function changeSlide(n) {
  showSlide(currentSlide += n);
}

// Auto slide every 3 seconds (adjust the interval as needed)
setInterval(() => {
  changeSlide(1);
}, 3000);

// Initial display
showSlide(currentSlide);