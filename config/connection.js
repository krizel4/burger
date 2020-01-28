// Initialize the connection to MySQL
var mysql = require('mysql');

// I was working with 'const' and for some reason I kept receiving errors. No idea why. But changing this to var for some reason worked.
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'rootroot',
            database: 'burgers_db'
        });
    };


// Connect to database
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
})

// Export Connection
module.exports = connection;