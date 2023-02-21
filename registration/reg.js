const startbutton = document.querySelector(".startbutton");

function validationEmail() {
    const emailinput = document.querySelector(".emailinput").value;
    try {
        if (emailinput.length < 5) throw new Error("Слишком короткая почта, попробуйте снова");
        if (!/^[a-z]+@[a-z]+\.[a-z]{1,5}$/gm.test(emailinput)) throw new Error("Почта введена некорректно, попробуйте снова")
        return true
    } catch (err) {
        alert(err.message)
    }
}

function validationPassword(validationEmail) {
    if (validationEmail == true) {
        try {
            const passwordinput = document.querySelector(".passwordinput").value;
            const dblpasswordinput = document.querySelector(".dblpasswordinput").value;
            if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm.test(passwordinput)) throw new Error(""))
        } catch (err) {

        }
    }
}



startbutton.addEventListener("click", validationData)