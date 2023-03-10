const startbutton = document.querySelector(".startbutton");
const logout = document.querySelector(".logout");

function validationData() {

    try {
        const emailinput = document.querySelector(".emailinput").value;
        const passwordinput = document.querySelector(".passwordinput").value;
        const dblpasswordinput = document.querySelector(".dblpasswordinput").value;
 
        if (!emailinput.length || !passwordinput.length || !dblpasswordinput.length) throw new Error ("Вы не ввели свои учетные данные")
        if (emailinput.length < 5) throw new Error("Слишком короткая почта, попробуйте снова");

        if (!/^[a-z]+@[a-z]+\.[a-z]{1,5}$/gm.test(emailinput)) throw new Error("Почта введена некорректно, попробуйте снова")

        if (passwordinput.length < 8) throw new Error("Пароль слишком короткий. Введите пароль, длиной не менее, чем 8 символов.")

        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gm.test(passwordinput))
            throw new Error("Пароль должен содержать минимум 8 символов, 1 заглавную букву и минимум 1 спецсимвол. Введите пароль снова")

        if (passwordinput != dblpasswordinput) throw new Error("Пароли не совпадают. Введите пароли еще раз")

        return alert("Вы успешно зарегестрированы!")
    } catch (err) {
        alert(err.message)
    }

}

// startbutton.addEventListener("mouseover", function newStyle () {
//     (startbutton.style.backgroundColor == "#4C70FF$;") ? startbutton.style.backgroundColor = "#66BCE8;" : startbutton.style.backgroundColor = "#4C70FF;"
// })

startbutton.addEventListener("click", validationData)
logout.addEventListener("click", function switching() {
    window.location.href = "file:///C:/Users/HP/Desktop/auth-page/authorization/auth.html"
})

