let acknowledgeButton = document.querySelector('#acknowledgeButton');
let rejectedRadioButton = document.querySelector('#rejectedRadioButton');
let acceptedRadioButton = document.querySelector('#acceptedRadioButton');
let confirmButton = document.querySelector('#confirmButton');

acknowledgeButton.onclick = () => {
    $('#acknowledgeModal').modal('show');

    let commentInputModal = document.querySelector('#commentInputModal');

    acceptedRadioButton.onclick = () => {
        commentInputModal.style.display = "none";
    }

    rejectedRadioButton.onclick = () => {
        commentInputModal.style.display = "block";
    }

    confirmButton.onclick = (e) => {
        e.preventDefault();
        $('#acknowledgeSuccessfulModal').modal('show');
    }
};