//Open and close function for the read moder.
function readMore(element) {
    var dots = document.getElementById(`${element}Dots`);
    var moreText = document.getElementById(element);
    var btnText = document.getElementById(`${element}Btn`);
  
    //if the doth is there that means the read more is closed
    if (dots.style.display === "none") {
      dots.style.display = "inline-flex";
      btnText.innerHTML = "Read more"; 
      moreText.classList.toggle('visible');
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less"; 
      moreText.classList.toggle('visible');
    }
  }