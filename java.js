const from = document.getElementById("from");
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confarm = document.getElementById("confirm");

from.addEventListener("submit", (event) => {
    event.preventDefault();
    namevalidate();
    phonevalidate();
    emailvalidate();
    passwordvalidate();
    confarmvalidate();
})

const namevalidate = () => {

    const usernameval = username.value.trim();





    if (usernameval === "") {
        setErrorMsg(username, 'username cannot be blank');
    } else if (usernameval.length <= 2) {
        setErrorMsg(username, 'username cannot be small');
    } else {
        setSuccessMsg(username);
    }




}
const phonevalidate = () => {
    const phoneval = phone.value.trim();


    if (phoneval === "") {
        setErrorMsg(phone, 'username cannot be blank');
    } else if (phoneval.length < 10) {
        setErrorMsg(phone, 'Invalid Phone Number');
    } else {
        setSuccessMsg(phone);
        console.log(phoneval);
    }
}
const emailvalidate = () => {
    const emailval = email.value.trim();


    const isEmail = (emailval) => {
        var atSymbol = emailval.indexOf("@");
        if (atSymbol < 1) return false;
        var dot = emailval.lastIndexOf('.');
        if (dot <= atSymbol + 3) return false;
        if (dot === emailval.length - 1) return false;
        return true;
    }

    if (emailval === "") {
        setErrorMsg(email, 'email cannot be blank');
    } else if (!isEmail(emailval)) {
        setErrorMsg(email, 'This is not a valid email');

    } else {
        setSuccessMsg(email);
    }

}
const passwordvalidate = () => {
    const passwordval = password.value.trim();
    if (passwordval === "") {
        setErrorMsg(password, 'username cannot be blank');
    } else if (passwordval.length < 5) {
        setErrorMsg(password, 'Password Must be in 5 Charecter');
    } else {
        setSuccessMsg(password);
    }
}
const confarmvalidate = () => {
    const passwordval = password.value.trim();
    const confarmval = confarm.value.trim();


    if (confarmval === "") {
        setErrorMsg(password, 'username cannot be blank');
    } else if (confarmval != passwordval) {
        setErrorMsg(confarm, 'incorrect Password');
    } else {
        setSuccessMsg(confarm);
    }
}


function setErrorMsg(input, errormsgs) {
    const fromcontrol = input.parentElement;
    const span = fromcontrol.querySelector('span');
    fromcontrol.className = "from-control error";
    span.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const fromcontrol = input.parentElement;
    fromcontrol.className = "from-control success";

}