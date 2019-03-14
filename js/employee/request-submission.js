// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
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
                    $('#submitSuccessfulModal').modal('show');
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    $('#validationPurchaseDate').daterangepicker({
        singleDatePicker: true,
        locale: {
            format: 'DD/MM/YYYY'
        },
        maxDate: new Date()
    });

    $('#validationPurchaseDate').val('');

    let takeAPhotoButton = document.querySelector('#takeAPhotoButton');
    let takeAPhotoOkButton = document.querySelector('#takeAPhotoOkButton');

    let video = document.getElementById('video');
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let capture = document.getElementById('capture');
    let photo = document.getElementById('photo-from-employee');

    console.log(window);

    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    capture.onclick = () => {
        context.drawImage(video, 0, 0, 400, 300);
    }

    takeAPhotoButton.onclick = () => {
        $('#takeAPhotoModal').modal('show');
    };

    takeAPhotoOkButton.onclick = () => {
        $('#takeAPhotoModal').modal('hide');
    }

})();

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#testUploadImage')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}