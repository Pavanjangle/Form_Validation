document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = form.querySelector('[name="username"]').value;
        const email = form.querySelector('[name="email"]').value;
        const dob = form.querySelector('[name="dob"]').value;
        const password = form.querySelector('[name="password"]').value;
        const confirmPassword = form.querySelector('[name="confirmPassword"]').value;

        if (password !== confirmPassword) {

            alert("Passwords do not match. Please try again.");

            return;
        }
        
        const userData = {
            username: username,
            email: email,
            dob: dob,
            password: password,
           
        };

        localStorage.setItem('userData', JSON.stringify(userData));

        form.reset();
    });
});
//  console.log(localStorage,);  // for console 
