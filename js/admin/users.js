let createUserButton = document.querySelector('#create-user-button');
// Initialising all 'view-detail' buttons
let viewDetailsButtons = document.querySelectorAll('#view-details-button');

createUserButton.onclick = () => {
    window.location.href = "admin-create-user.html";
};

viewDetailsButtons.forEach(viewDetailsButton => {
    viewDetailsButton.onclick = () => {
        window.location.href = "admin-view-user-details.html";
    }
});

function searchFunction() {
    input = document.getElementById('searchFor');
    filter = input.value.toUpperCase();
    table = document.getElementById('users-table');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}