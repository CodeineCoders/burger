var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection
    ({
        port: 3306,
        host:"localhost",
        user: "root",
        password: "",
        database: "burger_db"
    });
}

connection.connect(function (err) {
    if (err) {
        coonsole.error("error");
        return;        
    }
    console.log("Connected: " + connection.threadId);

});

module.exports = connection;