// It is the script file for the navigation.
const navBox = document.getElementsByClassName('nav-container')[0];
let previousPage = document.getElementsByClassName("active");

window.addEventListener('hashchange', ()=>{

    const currentPage = window.location.hash.substr(1);
    const activeNavItem = navBox.querySelector(`[href="#${currentPage}"]`);
    previousPage[0].classList.toggle("active");
    activeNavItem.classList.toggle("active");
});
