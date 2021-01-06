const lokijs = require('lokijs');
const dirName = require('path').dirname;
const fs = require('fs-extra');

const DB_VERSION = 1;
class TokenManager {

    constructor(filePath = './data/tokenmanager.db', logger = console) {
        const databaseInitialized = () => {
            this.tokens = this.db.getCollection('tokens') || this.db.addCollection('tokens');
            this.metadata = this.db.getCollection('metadata') || this.db.addCollection('metadata');

            const currentVersion = this.metadata.findOne({ id: 'version' });

            if (!currentVersion) {
                this.metadata.insertOne({ id: 'version', value: DB_VERSION });
            }
        }

        fs.ensureDirSync(dirName(filePath));
        this.db = new lokijs(filePath, {
            autoload: true,
            autoloadCallback: databaseInitialized,
            autosave: true,
            autosaveInterval: 1000
        });

        this.logger = logger;
    }

    assignToken(uid, data) {
        const assignment = this.tokens.findOne({ uid });
        if (!assignment) {
            return this.tokens.insertOne({ uid, data });
        } else {
            throw new Error('token already assigned - unassign first')
        }
    }

    unassignToken(uid) {
        const assignment = this.tokens.findOne({ uid });
        if (!assignment) {
            this.logger.info('token', uid, 'was not assigned')
            return null;
        } else {
            this.tokens.removeWhere({ uid });
            return assignment.data;
        }
    }

    readToken(uid) {
        const assignment = this.tokens.findOne({ uid });
        return assignment && assignment.data
    }

    getAllAssignments() {
        return this.tokens.find()
            .map((a) => { return { uid: a.uid, data: a.data } })
    }

}

module.exports = TokenManager;
