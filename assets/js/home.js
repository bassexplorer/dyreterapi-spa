// Carousel javascript.
const facilitiesCarousel = document.getElementById('facilitiesCarousel');
const facilitiesItems = facilitiesCarousel.getElementsByClassName('our-facilities');
let counter = 3;
const size = facilitiesItems[0].clientWidth;

facilitiesCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Right arrow run this function and change the slides
function nextSlide() {
    if (counter >= facilitiesItems.length - 3) return;
    facilitiesCarousel.classList.add('animation');
    counter++;
    facilitiesCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
};
// Left arrow
function prevSlide() {
    if (counter <= 0) return;
    facilitiesCarousel.classList.add('animation');
    counter--;
    facilitiesCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
};

facilitiesCarousel.addEventListener('transitionend', () => {

    // If the carousel reach the start clone picture it jump back to the end
    if (facilitiesItems[counter].id === 'resetStart') {

        facilitiesCarousel.classList.remove('animation');
        counter = facilitiesItems.length - 5;
        facilitiesCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    // If the carousel reach the end clone picture it jump back to the start of the carousel
    if (facilitiesItems[counter].id === 'resetEnd') {
        // remove the animation from the element
        facilitiesCarousel.classList.remove('animation');
        counter = facilitiesItems.length - counter;
        facilitiesCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// Contact form function that handls the input 
function subscribeMsg(hide) {
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let eMail = document.getElementById('email').value;
    let massageBox = document.getElementById('backMassage')
    let checkBox = document.getElementById("iAgree").checked;

    if (firstName == '' || lastName == '' || eMail == '') {
        massageBox.innerHTML = 'Please fill out every field.';
    } else if (!eMail.includes("@") || !eMail.includes(".")) {
        massageBox.innerHTML = 'The email address is wrong.';
    } else if (!checkBox == true) {
        massageBox.innerHTML = 'Please accept the Privacy Policy.';
    } else {
        massageBox.innerHTML = `<h1>Thank you for subscribing to our newsletter!</h1>
        <p> We will get back to you with the lattest news .</p>
        <a onclick="subscribeMsg(true)"> <i class="fas fa-horse"></i> Okay! <i class="fas fa-dog"></i></a>`
    };
    document.getElementsByClassName('contact-popup')[0].classList.add('show');

    if (hide) document.getElementsByClassName('contact-popup')[0].classList.remove('show');
}