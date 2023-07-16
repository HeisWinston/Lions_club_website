const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

console.log(forms, pwShowHide, links);

pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        let pwFields =
            eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach((password) => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-hide", "bx-show");
        });
    });
});

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    });
});

async function signupFormHandler(event) {
    event.preventDefault();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    const user_name = document.querySelector("#username-signup").value.trim();
    if (user_name && email && password) {
        const response = await fetch("/user/sign_up", {
            method: "post",
            body: JSON.stringify({
                user_name,
                email,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        if (response.ok) {
            // document.location.replace('/api/profile/');
            console.log(data.statusText);
        } else {
            var alertMsg;
            data.errors.forEach(element => alertMsg = (element.message));
            console.log(alertMsg);
            alert(alertMsg);
        }
    }
}

async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (email && password) {
        const response = await fetch("/user/login", {
            method: "post",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });
        //had to delay execution of the code below, because session obg was being accessed too soon, therefore api/route couldn't get passed withAuth
        setTimeout(() => {
            if (response.ok) {
                // document.location.replace("/api/profile");
                alert(response);
            } else {
                console.log(response.status);
            }
        }, "400");
    }
}

// document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector(".signup").addEventListener("submit", signupFormHandler);
