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

    connection.connect(function (err){
        if (err) throw err;

        displayProducts();
        setTimeout(shop, 3000)
    });

    function displayProducts() {
        connection.query("SELECT * FROM products", function(err, res){
            console.log(`
            ==========================================================================
            ID | Product | Price
            ==========================================================================`);
            for (var i = 0; i < res.length; i++) {
                console.log(`
                ${res[i].id} | ${res[i].product_name} | $${res[i].price}
            ==========================================================================`);
            }
        })
    };

    

    