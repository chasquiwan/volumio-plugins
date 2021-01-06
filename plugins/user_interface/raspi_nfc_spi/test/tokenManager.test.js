const TokenManager = require('../lib/tokenManager');
const dbPath = './data/tm.json';

const tm = new TokenManager(dbPath);
try {
    tm.assignToken(1, 'something');
    tm.readToken(1);
    tm.unassignToken(1);
} catch (err) {
    console.log(err)
}