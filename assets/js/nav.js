// It is the script file for the navigation.
const navBox = document.getElementsByClassName('nav-container')[0];
let previousPage = document.getElementsByClassName("active");

window.addEventListener('hashchange', ()=>{

    const currentPage = window.location.hash.substr(1);
    const activeNavItem = navBox.querySelector(`[href="#${currentPage}"]`);
    previousPage[0].classList.toggle("active");
    activeNavItem.classList.toggle("active");
});

window.addEventListener('scroll', ()=>{
    let distanceFromTop = window.pageYOffset
    let navigation = document.getElementsByClassName('nav-top')[0];

    if(distanceFromTop > 100){
        navigation.style.backgroundColor = 'white';
        navigation.style.boxShadow = '0px 1px 5px 0px #0000004d';
    }else{
        navigation.style.backgroundColor = 'rgba(255, 255, 255, 0.70)';
        navigation.style.boxShadow = 'none';
    }

})
