async function signupFormHandler(event) {
    event.preventDefault();
    console.log("click");

    const email = document.querySelector("#newsletter-signup").value.trim();

    if (email) {
        const response = await fetch("/newsletter", {
            method: "post",
            body: JSON.stringify({
                email
            }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        if (response.ok) {
            alert("Your email has been added to the Newsletter!");
            document.location.replace('/');
        } else {
            var alertMsg;
            data.errors.forEach(element => alertMsg = (element.message));
            console.log(alertMsg);
            alert(alertMsg);
        }
    }
}

document.querySelector(".newsletter").addEventListener("submit", signupFormHandler);
