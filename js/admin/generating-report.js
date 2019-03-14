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

function selectAllFunction(source) {
    let checkboxes = document.getElementsByName('staff');
    let selectAllCheckBox = document.querySelector('#Select-all');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
    if (selectAllCheckBox.checked === true) {
        selectionList.value += 'JohnJamesMark';
    } else {
        selectionList.value = selectionList.value.replace('JohnJamesMark', "");
    }
}

function johnFunction() {
    let johnCheckBox = document.querySelector('#John');
    if (johnCheckBox.checked === true) {
        selectionList.value += 'John';
    } else {
        selectionList.value = selectionList.value.replace('John', "");
    }
}

function jamesFunction() {
    let jamesCheckBox = document.querySelector('#James');
    if (jamesCheckBox.checked === true) {
        selectionList.value += 'James';
    } else {
        selectionList.value = selectionList.value.replace('James', "");
    }
}

function markFunction() {
    let markCheckBox = document.querySelector('#Mark');
    if (markCheckBox.checked === true) {
        selectionList.value += 'Mark';
    } else {
        selectionList.value = selectionList.value.replace('Mark', "");
    }
}