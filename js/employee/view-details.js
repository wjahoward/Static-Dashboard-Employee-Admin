// Initialising tab bars
let viewDetailsTabBar = document.querySelector('#view-details-tab-bar');
let viewStatusTabBar = document.querySelector('#view-status-tab-bar');
let updateTabBar = document.querySelector('#update-tab-bar');
let deleteTabBar = document.querySelector('#delete-tab-bar');

// Initiailising links
let viewDetailsLink = document.querySelector('#view-details-link');
let viewStatusLink = document.querySelector('#view-status-link');
let updateLink = document.querySelector('#update-link');
let deleteLink = document.querySelector('#delete-link');

// Initialising tables
let viewDetailsTable = document.querySelector('#view-details-table');
let viewStatusTable = document.querySelector('#view-status-table');
let updateTable = document.querySelector('#update-table');
let deleteTable = document.querySelector('#delete-table');

// Initialising button
let deleteButton = document.querySelector('#deleteButton');
let deleteConfirmationModalOkButton = document.querySelector('#delete-confirmation-modal-ok-button');

viewDetailsTabBar.onclick = () => {
    viewDetailsTabBar.classList.add("active");
    viewStatusTabBar.classList.remove("active");
    updateTabBar.classList.remove("active");
    deleteTabBar.classList.remove("active");

    viewDetailsLink.style.borderBottom = "3px solid grey";
    viewStatusLink.style.borderBottom = "";
    updateLink.style.borderBottom = "";
    deleteLink.style.borderBottom = "";

    viewDetailsTable.style.display = "block";
    viewStatusTable.style.display = "none";
    updateTable.style.display = "none";
    deleteTable.style.display = "none";
};

viewStatusTabBar.onclick = () => {
    viewDetailsTabBar.classList.remove("active");
    viewStatusTabBar.classList.add("active");
    updateTabBar.classList.remove("active");
    deleteTabBar.classList.remove("active");

    viewDetailsLink.style.borderBottom = "";
    viewStatusLink.style.borderBottom = "3px solid grey";
    updateLink.style.borderBottom = "";
    deleteLink.style.borderBottom = "";

    viewDetailsTable.style.display = "none";
    viewStatusTable.style.display = "block";
    updateTable.style.display = "none";
    deleteTable.style.display = "none";
};

updateTabBar.onclick = () => {
    viewDetailsTabBar.classList.remove("active");
    viewStatusTabBar.classList.remove("active");
    updateTabBar.classList.add("active");
    deleteTabBar.classList.remove("active");

    viewDetailsLink.style.borderBottom = "";
    viewStatusLink.style.borderBottom = "";
    updateLink.style.borderBottom = "3px solid grey";
    deleteLink.style.borderBottom = "";

    viewDetailsTable.style.display = "none";
    viewStatusTable.style.display = "none";
    updateTable.style.display = "block";
    deleteTable.style.display = "none";
}

deleteTabBar.onclick = () => {
    viewDetailsTabBar.classList.remove("active");
    viewStatusTabBar.classList.remove("active");
    updateTabBar.classList.remove("active");
    deleteTabBar.classList.add("active");

    viewDetailsLink.style.borderBottom = "";
    viewStatusLink.style.borderBottom = "";
    updateLink.style.borderBottom = "";
    deleteLink.style.borderBottom = "3px solid grey";

    viewDetailsTable.style.display = "none";
    viewStatusTable.style.display = "none";
    updateTable.style.display = "none";
    deleteTable.style.display = "block";
};

(function () {
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    event.stopPropagation();
                    $('#updateSuccessfulModal').modal('show');
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

deleteButton.onclick = () => {
    $('#deleteConfirmationModal').modal('show');
}

deleteConfirmationModalOkButton.onclick = (e) => {
    e.preventDefault();
    $('#deleteSuccessfulModal').modal('show');
}

$('#validationPurchaseDate').daterangepicker({
    singleDatePicker: true,
    locale: {
        format: 'DD/MM/YYYY'
    },
    maxDate: new Date()
});

$('#validationPurchaseDate2').daterangepicker({
    singleDatePicker: true,
    locale: {
        format: 'DD/MM/YYYY'
    },
    maxDate: new Date()
});

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