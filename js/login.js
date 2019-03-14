/* credentials to login
   - admin -> username: admin@example.com , password: password
   - employee -> username: employee@example.com , password: password */

(function () {
    let userEmailAddress = document.querySelector('#exampleInputEmail');
    let userPassword = document.querySelector('#exampleInputPassword');

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    event.stopPropagation();
                    if (userEmailAddress.value.toLowerCase() === 'admin@example.com' && userPassword.value === 'password') {
                        window.location.href = 'admin-dashboard.html';
                    } else if (userEmailAddress.value.toLowerCase() === 'employee@example.com' && userPassword.value === 'password') {
                        window.location.href = 'employee-dashboard.html';
                    }
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
