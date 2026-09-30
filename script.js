document.getElementById("admissionForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let course = document.getElementById("course").value;
    let message = document.getElementById("message");

    if (name === "") {
        message.innerHTML = "Please enter your name.";
        return;
    }

    if (email === "") {
        message.innerHTML = "Please enter your email.";
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        message.innerHTML = "Please enter a valid 10-digit mobile number.";
        return;
    }

    if (course === "") {
        message.innerHTML = "Please select a course.";
        return;
    }

    message.innerHTML = "Admission form submitted successfully!";
});