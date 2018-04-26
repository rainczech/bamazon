var mysql = require("mysql2");
var inquirer = require("inquirer");
var Table = require("easy-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log ("connected as id" + connection.threadId);
    display();
});

// running this app will first display all fo the items for sale

function display(){
    connection.query("select * from products", function (err, result){
        if (err) throw err;
        console.log(Table.print(result));
        prompt ();
})};

function prompt(){
    inquirer
        .prompt([
            {
            name: "whichId",
            type: "input",
            message: "Enter the ID number of the product you would like to purchase"
            },
            {
            name:"quantity",
            type:"input",
            message: "How many would like to buy?" 
            }
        ])
        .then(function(answer){
            connection.query(  
                "SELECT stock_quantity FROM products WHERE id =" + answer.whichId, function (err, res) {
                    if (err) throw err;
                    const prodId = answer.whichId;
                    const newQuantity = (res[0].stock_quantity - answer.quantity)
                    update();
                });
            });

        function update (answer, newQuantity){
                connection.query(
                    "UPDATE products SET ? WHERE ?", function(err, res){
                        if (err) throw err;
                [
                    {
                    stock_quantity: newQuantity
                    },
                    {
                    id: prodId
                    }
                ],function(err,results){
                    console.log(results)
                }
            }
            )};
        };


// app should tehm prompt users with two messages:
    // 1. ask the ID of the product they want to purchase
    // 2. how many units they would like to buy



// app should check if store has enough stuff to sell. if not, order would be prevented from going though and log "insufficient quantity"


// if does have enough stuff, fullfill the customer's order.
// 1. updating the SQL database
// 2. show the customer the total cost of their purchase



