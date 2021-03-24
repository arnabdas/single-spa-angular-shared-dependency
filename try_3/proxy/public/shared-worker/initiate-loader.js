var loaderDiv = document.getElementById('voila-loader');
if (!!window.SharedWorker) {
    var worker = new SharedWorker('/js/worker.js');

    worker.port.onmessage = function(e) {
        if(e.data && 'voila-toggle-loader'.indexOf(e.data.event) === 0) {
            if ('none'.indexOf(loaderDiv.style.display) === 0) {
                loaderDiv.style.display = 'block';
            }
            else {
                loaderDiv.style.display = 'none';
            }
        }
    }

    window['voila-shared-worker'] = worker;
}