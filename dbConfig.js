const sqlite3 = require('sqlite3').verbose();

const dbFilePath = './public/database/go_sayur.db';
const connection = new sqlite3.Database(dbFilePath);

module.exports = connection;
