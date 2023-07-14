const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links  = document.querySelectorAll(".link");


console.log(forms,pwShowHide,links )

pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click",() => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

      
        
        pwFields.forEach(password => {
                if(password.type === "password"){
                        password.type = "text";
                        eyeIcon.classList.replace("bx-hide", "bx-show");
                        return; 

                }
                password.type = "password";
                        eyeIcon.classList.replace("bx-hide", "bx-show");
        })
    })
})

links.forEach(link =>{
        link.addEventListener("click",e => {
                e.preventDefault(); 
                forms.classList.toggle("show-signup");

        })
})

async function signupFormHandler(event) {
        event.preventDefault();
        const email = document.querySelector('#email-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();
        const user_name = document.querySelector('#username-signup').value.trim();
        if (user_name && email && password) {
            const response = await fetch('/sign_up/register', {
                method: 'post',
                body: JSON.stringify({
                    user_name,
                    email,
                    password
                }),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                // document.location.replace('/api/profile/');
                console.log(response);
            } else {
                alert(response.statusText);
            }
        }
    };

// document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup').addEventListener('submit', signupFormHandler);