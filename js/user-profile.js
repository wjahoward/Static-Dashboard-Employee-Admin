(function () {
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                } else {
                    event.preventDefault();
                    $('#updateSuccessfulModal').modal('show');
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();