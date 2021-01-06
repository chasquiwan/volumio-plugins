'use strict';

const MFRC522Daemon = require('../lib/mfrc522Daemon');

const serializeUid = function(uid){
	return uid && uid[0] 
		? uid[0].toString(16)+uid[1].toString(16)+uid[2].toString(16)+uid[3].toString(16)
		: JSON.stringify(uid)
}

const handleCardDetected = function(uid) {
	console.log('NFC card detected', serializeUid(uid));
//	self.commandRouter.pushToastMessage('success', 'NFC card detected', serializeUid(uid));
}

const handleCardRemoved = function(uid) {
	console.log('NFC card removed', serializeUid(uid));
//	self.commandRouter.pushToastMessage('success', 'NFC card removed', serializeUid(uid));
}

const spiChannel = 0; //TODO: configure SPI channel
const nfcDaemon = new MFRC522Daemon(spiChannel, handleCardDetected, handleCardRemoved);

nfcDaemon.start();
