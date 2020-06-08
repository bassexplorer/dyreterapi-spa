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
    } else if(!checkBox == true){
        massageBox.innerHTML = 'Please accept the Privacy Policy.';
    }else {
        massageBox.innerHTML = `<h1>Thank you for subscribing to our newsletter!</h1>
        <p> We will get back to you with the lattest news .</p>
        <a onclick="subscribeMsg(true)"> <i class="fas fa-horse"></i> Okay! <i class="fas fa-dog"></i></a>`
    };
    document.getElementsByClassName('contact-popup')[0].classList.add('show');

    if (hide) document.getElementsByClassName('contact-popup')[0].classList.remove('show');
}