var mysql = require ("mysql");
var inquirer = require ("inquirer");
var table = require ("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon_DB",
    })
    connection.connect();

    var display = function(){
        connection.query("SELECT * FROM products", function(err, res){
            if (err) throw err;
            console.log
            (`
            ------------------------------------------------------------
                                WELCOME TO BAMAZON!
            ____________________________________________________________

            FIND YOUR PRODUCTS HERE!
            `)
        }) 
        var table = new table({
            head: [`id`, `product_name`,`department_id`, `price`, `stock_quantity`],
            colWidths: [12, 50, 8],
            colAligns: ["center", "left", "right"],
            style: {
                head: ["aqua"],
                compact: true
            }
        });

        
    };