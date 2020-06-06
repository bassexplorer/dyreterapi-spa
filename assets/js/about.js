function readMore(element) {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById(element);
    var btnText = document.getElementById("readMoreBtn");
  
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