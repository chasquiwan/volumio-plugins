const serializeUid = function (uid) {
	return uid && uid[0]
		? `${uid[0].toString(16)}-${uid[1].toString(16)}-${uid[2].toString(16)}-${uid[3].toString(16)}`
		: JSON.stringify(uid);
}

module.exports = serializeUid;