// Initialize the connection to MySQL

const mysql = require("mysql");

// connection
const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "rootroot",
    database = "burger_DB"
});

// Connect to database
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

// Export Connection
module.exports = connection;