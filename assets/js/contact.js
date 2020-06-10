// If the user click on the contact us button on Contact page
function thankMsg(hide){
    document.getElementsByClassName('contact-popup')[0].classList.add('show');

    if(hide)document.getElementsByClassName('contact-popup')[0].classList.remove('show');
}