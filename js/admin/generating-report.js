// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    let generateButton = document.querySelector('#generateButton');

    $('#validationFrom, #validationTo').daterangepicker({
        singleDatePicker: true,
        locale: {
            format: 'DD/MM/YYYY'
        },
        maxDate: new Date()
    });

    $('#validationFrom, #validationTo').val('');

    generateButton.onclick = (e) => {
        e.preventDefault();
        $('#submitSuccessfulModal').modal('show');
    }
})();

let selectionList = document.querySelector('#selectionList');
let checkboxes = document.getElementsByName('staff');
let selectAllCheckBox = document.querySelector('#Select-all');
let johnCheckBox = document.querySelector('#John');
let jamesCheckBox = document.querySelector('#James');
let markCheckBox = document.querySelector('#Mark');

function selectAllFunction(source) {
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    if (selectAllCheckBox.checked === true) {
        selectionList.value = selectionList.value.replace('John', "");
        selectionList.value = selectionList.value.replace('James', "");
        selectionList.value = selectionList.value.replace('Mark', "");
        selectionList.value += 'JohnJamesMark';
    } else {
        selectionList.value = selectionList.value.replace('JohnJamesMark', "");
    }
}

function johnFunction() {
    if (johnCheckBox.checked === true) {
        selectionList.value += 'John';
    } else {
        selectionList.value = selectionList.value.replace('John', "");
        selectAllCheckBox.checked = false;
    }
}

function jamesFunction() {
    if (jamesCheckBox.checked === true) {
        selectionList.value += 'James';
    } else {
        selectionList.value = selectionList.value.replace('James', "");
        selectAllCheckBox.checked = false;
    }
}

function markFunction() {
    if (markCheckBox.checked === true) {
        selectionList.value += 'Mark';
    } else {
        selectionList.value = selectionList.value.replace('Mark', "");
        selectAllCheckBox.checked = false;
    }
}