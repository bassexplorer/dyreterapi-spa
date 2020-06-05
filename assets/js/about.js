function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");
  
    if (dots.style.visibility === "hidden") {
      dots.style.visibility = "visible";
      btnText.innerHTML = "Read more"; 
      moreText.classList.toggle('visible');
    } else {
      dots.style.visibility = "hidden";
      btnText.innerHTML = "Show less"; 
      moreText.classList.toggle('visible');
    }
  }