# mike

Mike is a modern world audio brodcaster which uses p2p connections.

## How it works
- Start file server 'node server.js' default port 3000.
- Start peer server 'node peerServer.js' default port 9000.
- Edit host in speaker.js and listener.js with IP of peer server.
- Open https://&lt;node-server-ip&gt;:3000/speaker.html
- Open https://lt;node-server-ip&gt;:3000/listener.html

## Technology
- Peerjs
- MediaStream API

### Changelog
- HTTPS support added

### FAQ
- Why I get https certificate error?
You can proceed with it as we are using self generated certificates.

