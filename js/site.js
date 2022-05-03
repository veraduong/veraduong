let slide_idx = 1;
carousel(slide_idx);

function plusSlides(n) {
  carousel(slide_idx += n);
}

function cur_slide(n) {
  carousel(slide_idx = n);
}

function carousel(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if(n > slides.length) {
    slide_idx = 1
  }    
  if(n < 1) {
    slide_idx = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_idx-1].style.display = "block";  
  dots[slide_idx-1].className += " active";
}