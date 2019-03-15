// Initialising tab bars
let viewDetailsTabBar = document.querySelector('#view-details-tab-bar');
let updateTabBar = document.querySelector('#update-tab-bar');
let deleteTabBar = document.querySelector('#delete-tab-bar');

// Initiailising links
let viewDetailsLink = document.querySelector('#view-details-link');
let updateLink = document.querySelector('#update-link');
let deleteLink = document.querySelector('#delete-link');

// Initialising tables
let viewDetailsTable = document.querySelector('#view-details-table');
let updateTable = document.querySelector('#update-table');
let deleteTable = document.querySelector('#delete-table');

// Initialising button
let deleteButton = document.querySelector('#deleteButton');
let deleteConfirmationModalOkButton = document.querySelector('#delete-confirmation-modal-ok-button');

viewDetailsTabBar.onclick = () => {
    viewDetailsTabBar.classList.add("active");
    updateTabBar.classList.remove("active");
    deleteTabBar.classList.remove("active");

    viewDetailsLink.style.borderBottom = "3px solid grey";
    updateLink.style.borderBottom = "";
    deleteLink.style.borderBottom = "";

    viewDetailsTable.style.display = "block";
    updateTable.style.display = "none";
    deleteTable.style.display = "none";
};

updateTabBar.onclick = () => {
    viewDetailsTabBar.classList.remove("active");
    updateTabBar.classList.add("active");
    deleteTabBar.classList.remove("active");

    viewDetailsLink.style.borderBottom = "";
    updateLink.style.borderBottom = "3px solid grey";
    deleteLink.style.borderBottom = "";

    viewDetailsTable.style.display = "none";
    updateTable.style.display = "block";
    deleteTable.style.display = "none";
}

deleteTabBar.onclick = () => {
    viewDetailsTabBar.classList.remove("active");
    updateTabBar.classList.remove("active");
    deleteTabBar.classList.add("active");

    viewDetailsLink.style.borderBottom = "";
    updateLink.style.borderBottom = "";
    deleteLink.style.borderBottom = "3px solid grey";

    viewDetailsTable.style.display = "none";
    updateTable.style.display = "none";
    deleteTable.style.display = "block";
};

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

deleteButton.onclick = () => {
    $('#deleteConfirmationModal').modal('show');
}

deleteConfirmationModalOkButton.onclick = (e) => {
    e.preventDefault();
    $('#deleteSuccessfulModal').modal('show');
}