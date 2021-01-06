var io = require('socket.io-client');
var socket = io.connect('http://192.168.13.104:3000');
socket.on('playingPlaylist', (playlist) => {console.log('playlist', playlist)});


// --- server

var io = require('socket.io')('http://192.168.13.104:3000')
io.sockets.emit('playingPlaylist','');
