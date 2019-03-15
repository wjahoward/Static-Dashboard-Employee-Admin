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
    input = document.querySelector('#searchFor');
    filter = input.value.toUpperCase();
    table = document.querySelector('#users-table');
    tr = table.querySelectorAll('tr');
    for (i = 1; i < tr.length; i++) {
        tds = tr[i].querySelectorAll("td");
        let flag = false;
        for (let j = 0; j < tds.length; j++) {
            let td = tds[j];
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                flag = true;
            }
        }
        if (flag) {
            tr[i].style.display = "";
        }
        else {
            tr[i].style.display = "none";
        }
    }
}