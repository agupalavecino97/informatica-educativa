'use stric'

var mysql = require('mysql');

var connection = mysql.createConnection({
    // --Local server
    host     : 'localhost',
    user     : 'root',
    password : '',
    database: 'informatica_educativa',
    
    // --test-gestory-api
    // host     : '',
    // user     : '',
    // password : '',
    // database: '',

    port: 3306
});


module.exports = connection;