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

    function shop() {
        connection.query("SELECT * FROM products", function (err,res){
            inquirer
                .prompt([{
                    name: "choice",
                    type: "list",
                    choices: function() {
                        var choiceArr = [];
                        for (var i = 0; i < res.length; i++) {
                            choiceArr.push(res[i].id.toString());
                        }
                        return choiceArr;
                    },
                    message: "What Item tickles your fancy? (choose by ID)"
                },
            {
                name: "quantity",
                type: "list",
                choices: ["1", "2","3", "4", "5"],
                message: "How many would you like to purchase?"
            }
        ])
        .then(function(answer){
            var chosenItems;
            for (var i = 0; i < res.length; i++) {
                if (res[i].id === parseInt(answer.choice)){
                    chosenItem = res[i];
                }
            }

        var  totalPaid = chosenItems.price * answer.quantity;

        if(chosenItems.stock_quantity <= parseInt(answer.quantity)) {
            connection.query(
                "Update products Set ? Where?",
                [
                    {
                        stock_quantity: chosenItems.stock_quantity - answer.quantity
                    },
                    {
                        id: chosenItems.id
                    }
                ],
                
            )
        }
        })
        })
    }


    