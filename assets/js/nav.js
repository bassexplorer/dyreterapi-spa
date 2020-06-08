// It is the script file for the navigation.
const navBox = document.getElementsByClassName('nav-container')[0];
let previousPage = document.getElementsByClassName("active");

window.addEventListener('hashchange', () => {

    const currentPage = window.location.hash.substr(1);
    const activeNavItem = navBox.querySelector(`[href="#${currentPage}"]`);
    previousPage[0].classList.toggle("active");
    activeNavItem.classList.toggle("active");
});


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
function scrollToElement(element) {
    setTimeout(() => {

        if (!element) {
            element = 'HEADER';
        }

        let elementToScroll = document.querySelector(element);
        console.log(elementToScroll)
        elementToScroll.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        });
    }, 100);
}

function openBurgerMenu(closeit) {

    const burgerScreen = document.getElementById('burgerScreen');
    const burgerOverlay = document.getElementsByClassName('overlay')[0];

    
    burgerOverlay.style.display = 'block';
    burgerScreen.classList.toggle('active');
    
    burgerOverlay.addEventListener('click', closeCanvas = function(){
        burgerScreen.classList.remove('active');
        burgerOverlay.style.display = 'none';
    });
    
    
    if(closeit){
        burgerOverlay.style.display = 'none';
        burgerScreen.classList.remove('active');
    }
}


function openCategory(element, event){
    element.classList.toggle('open');
    event.target.classList.toggle('open');
}