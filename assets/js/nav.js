// It is the script file for the navigation.

// find the navbar element
const navBox = document.getElementsByClassName('nav-container')[0];
// Find the element that has the active class by default.
let previousPage = document.getElementsByClassName("active");

// if  a hash change happen in the url run the active page check
window.addEventListener('hashchange', activePageCheck);
// if a refresh happens run again to keep the class in the right place
window.onload = activePageCheck();

// This function  gets the hash from the url that helps to find the active element
// that we find via attributum and add the active class to it and remove from the other ones
function activePageCheck() {

    const currentPage = window.location.hash.substr(1);
    const activeNavItem = navBox.querySelector(`[href="#${currentPage}"]`);
    if(!activeNavItem) {return}
    previousPage[0].classList.toggle("active");
    activeNavItem.classList.toggle("active");

    
}

// this change the navbar color to white 
//from transparent and show the back to top button
window.addEventListener('scroll', () => {
    let distanceFromTop = window.pageYOffset
    const navigation = document.getElementsByClassName('nav-top')[0];
    const backArrow = document.getElementById('backToTop');

    if (distanceFromTop > 100) {
        navigation.style.backgroundColor = 'white';
        navigation.style.boxShadow = '0px 1px 5px 0px #0000004d';
        backArrow.style.visibility = 'visible';
    } else {
        navigation.style.backgroundColor = 'rgba(255, 255, 255, 0.70)';
        navigation.style.boxShadow = 'none';
        backArrow.style.visibility = 'hidden';
    }

});


// Scroll into view function that scroll an element into view
function scrollToElement(element, page) {

    if (!element) {
        element = 'HEADER';
    }
    
    setTimeout(() => {

        let elementToScroll = document.querySelector(element);

        elementToScroll.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        });
    }, 100);
}


// Open burger menu function that open and close it.
function openBurgerMenu(closeit) {

    const burgerScreen = document.getElementById('burgerScreen');
    const burgerOverlay = document.getElementsByClassName('overlay')[0];


    burgerOverlay.style.display = 'block';
    burgerScreen.classList.toggle('active');

    burgerOverlay.addEventListener('click', closeCanvas = function () {
        burgerScreen.classList.remove('active');
        burgerOverlay.style.display = 'none';
    });


    if (closeit) {
        burgerOverlay.style.display = 'none';
        burgerScreen.classList.remove('active');
    }
}


function openCategory(element, event) {
    element.classList.toggle('open');
    event.target.classList.toggle('open');
}