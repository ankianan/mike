var peer = new Peer({
    host: 'peer.us-3.evennode.com',
    port: 3000
});

//var peer = new Peer({key:"d499201jt2dibe29",secure:true});
peer.on('open', function(id) {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function(mediaStream) {
        // Call a peer, providing our mediaStream
        var call = peer.call('speaker', mediaStream);
        call.on('stream', function(stream) {
            var audioContainer = document.querySelector('#audio1'); //audio element 
            if (audioContainer) {
                audioContainer.src = window.URL.createObjectURL(stream); //TODO does not work this way 
            }
            // `stream` is the MediaStream of the remote peer.
            // Here you'd add it to an HTML video/canvas element.
        });
    }).catch(function(err) {
        /* handle the error */
    });

});
