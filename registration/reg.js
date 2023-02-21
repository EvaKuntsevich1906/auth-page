const emailinput = document.querySelector(".emailinput");
const passwordinput = document.querySelector(".passwordinput");
const dblpasswordinput = document.querySelector(".dblpasswordinput");
const startbutton = document.querySelector(".startbutton");


function emailValidation (emailinput) {
    try {
    if (emailinput.value.length < 5) throw new Error("Слишком короткая почта, попробуйте снова"); 

    } catch (err) {
        alert(err.massage)
    }
}

 const checkEmail = emailValidation(emailinput)
startbutton.addEventListener("click", (checkEmail))