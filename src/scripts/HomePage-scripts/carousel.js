var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(index) {
    clearInterval(myTimer);
    if (index < 0){
      showSlides(slideIndex -= 1);
    } 
    else {
     showSlides(slideIndex += 1); 
    }
    index === -1
    ?  myTimer = setInterval(() => plusSlides(index + 2), 20000)
    : myTimer = setInterval(() => plusSlides(index + 1), 20000);
    
}

// Thumbnail image controls
function currentSlide(index) {

    clearInterval(myTimer);
    myTimer = setInterval(() => plusSlides(index + 1), 20000);
    showSlides(slideIndex = index);

}

function showSlides(index) {

    
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (index > slides.length) {
        slideIndex = 1
    }    

    if (index < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

  }

  window.addEventListener("load",function() {
      showSlides(slideIndex);
      myTimer = setInterval(function(){plusSlides(1)}, 20000);
  });