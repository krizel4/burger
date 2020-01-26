// Initialize the connection to MySQL
const mysql = require('mysql');

// connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootroot',
    database: 'burgers_db'
})

// Connect to database
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
})

// Export Connection
module.exports = connection;