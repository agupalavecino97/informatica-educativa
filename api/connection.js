'use stric'

var mysql = require('mysql');

var connection = mysql.createConnection({
    // --Local server
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'informatica_educativa',
    
    // 
    // host     : 'w3epjhex7h2ccjxx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    // user     : 'b0nxpck7cysure29',
    // password : 'bvkytr6j64srwua3',
    // database: 'cs254ba89okuk0ka',
    port: 3306
});


module.exports = connection;