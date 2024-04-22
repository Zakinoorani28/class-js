function checkUser() {
    var userEmail = localStorage.getItem("emil");
    var userPassword = localStorage.getItem("psw");

    if (userEmail !== null && userPassword !== null) {
        console.log("User", userEmail);
        window.location.pathname = "home.html";
    }

    else {
        if (window.location.pathname !== "/index.html") {
            window.location.pathname = "index.html";
        }
    }
}

function loginHandle() {
    var emailinput = document.getElementById("emil");
    var pswinput = document.getElementById("psw");

    if (emailinput.value !== "" && pswinput.value !== "") {

        localStorage.setItem("email", emailinput.value);
        localStorage.setItem("password", pswinput.value);
    }

    else {
        alert("Input Empty or Invalid!!")
    }
}
