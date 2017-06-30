/*var peer = new Peer("speaker", {
    host: 'localhost',
    port: 9000
});
*/
var peer = new Peer({key:"d499201jt2dibe29"});

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
