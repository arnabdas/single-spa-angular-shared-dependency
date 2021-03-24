onconnect = function (e) {
    var port = e.ports[0];

    port.onmessage = function (e) {
        if (e.data)
            port.postMessage(e.data);
    }

}