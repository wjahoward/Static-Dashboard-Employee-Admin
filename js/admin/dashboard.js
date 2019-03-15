// Initialising tab bars
let allTabBar = document.querySelector('#all-tab-bar');
let pendingTabBar = document.querySelector('#pending-tab-bar');
let acceptedTabBar = document.querySelector('#accepted-tab-bar');
let rejectedTabBar = document.querySelector('#rejected-tab-bar');

// Initiailising links
let allLink = document.querySelector('#all-link');
let pendingLink = document.querySelector('#pending-link');
let acceptedLink = document.querySelector('#accepted-link');
let rejectedLink = document.querySelector('#rejected-link');

// Initialising tables
let allTable = document.querySelector('#all-table');
let pendingTable = document.querySelector('#pending-table');
let acceptedTable = document.querySelector('#accepted-table');
let rejectedTable = document.querySelector('#rejected-table');

// Initialising all 'view-detail' buttons
let viewDetailsButtons = document.querySelectorAll('#view-details-button');

// For Search Box
let input, filter, table, tr, td, i, txtValue;

allTabBar.onclick = () => {
    allTabBar.classList.add("active");
    pendingTabBar.classList.remove("active");
    acceptedTabBar.classList.remove("active");
    rejectedTabBar.classList.remove("active");

    allLink.style.borderBottom = "3px solid grey";
    pendingLink.style.borderBottom = "";
    acceptedLink.style.borderBottom = "";
    rejectedLink.style.borderBottom = "";

    allTable.style.display = "block";
    pendingTable.style.display = "none";
    acceptedTable.style.display = "none";
    rejectedTable.style.display = "none";

    input.value = "";
};

pendingTabBar.onclick = () => {
    allTabBar.classList.remove("active");
    pendingTabBar.classList.add("active");
    acceptedTabBar.classList.remove("active");
    rejectedTabBar.classList.remove("active");

    allLink.style.borderBottom = "";
    pendingLink.style.borderBottom = "3px solid grey";
    acceptedLink.style.borderBottom = "";
    rejectedLink.style.borderBottom = "";

    allTable.style.display = "none";
    pendingTable.style.display = "block";
    acceptedTable.style.display = "none";
    rejectedTable.style.display = "none";

    input.value = "";
};

acceptedTabBar.onclick = () => {
    allTabBar.classList.remove("active");
    pendingTabBar.classList.remove("active");
    acceptedTabBar.classList.add("active");
    rejectedTabBar.classList.remove("active");

    allLink.style.borderBottom = "";
    pendingLink.style.borderBottom = "";
    acceptedLink.style.borderBottom = "3px solid grey";
    rejectedLink.style.borderBottom = "";

    allTable.style.display = "none";
    pendingTable.style.display = "none";
    acceptedTable.style.display = "block";
    rejectedTable.style.display = "none";

    input.value = "";
}

rejectedTabBar.onclick = () => {
    allTabBar.classList.remove("active");
    pendingTabBar.classList.remove("active");
    acceptedTabBar.classList.remove("active");
    rejectedTabBar.classList.add("active");

    allLink.style.borderBottom = "";
    pendingLink.style.borderBottom = "";
    acceptedLink.style.borderBottom = "";
    rejectedLink.style.borderBottom = "3px solid grey";

    allTable.style.display = "none";
    pendingTable.style.display = "none";
    acceptedTable.style.display = "none";
    rejectedTable.style.display = "block";

    input.value = "";
};

viewDetailsButtons.forEach(viewDetailsButton => {
    viewDetailsButton.onclick = () => {
        window.location.href = "admin-view-details.html";
    }
});

function searchFunction() {
    input = document.querySelector('#searchFor');
    filter = input.value.toUpperCase();

    if (allTabBar.classList[1] === 'active') {
        table = document.querySelector('#all-table');
    } else if (pendingTabBar.classList[1] === 'active') {
        table = document.querySelector('#pending-table');
    } else if (acceptedTabBar.classList[1] === 'active') {
        table = document.querySelector('#accepted-table');
    } else if (rejectedTabBar.classList[1] === 'active') {
        table = document.querySelector('#rejected-table');
    }

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