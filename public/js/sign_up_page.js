const forms = document.querySelector(".forms"),
        pwShowHide = document.querySelector(".eye-icon"),
        links  = document.querySelector(".link");

pwShowHide.forEeach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentELement.parentELement.querySelectorAll(".password");
        console.log(pwFields)
    })
})