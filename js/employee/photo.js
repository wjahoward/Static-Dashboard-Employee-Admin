(function () {
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

})();