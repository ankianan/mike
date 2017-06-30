var peer = new Peer("speaker", {
    host: 'peer.us-3.evennode.com',
    port: 3000
});

//var peer = new Peer({key:"d499201jt2dibe29",secure:true});

peer.on('open', function(id) {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function(mediaStream) {
        peer.on('call', function(call) {
            // Answer the call, providing our mediaStream
            call.answer(mediaStream);
        });
    }).catch(function(err) {
        /* handle the error */
    });
});
