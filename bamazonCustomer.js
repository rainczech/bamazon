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

    // }
        .then(function(answer){
            var item;
            for (var i=0; i<result.length; i++){
                if (results[i].id === answer.whichId){
                    item = result[i];
                }
            }
            if (result.stock_quantity >= parseInt(answer.quantity)) {
                var newQuantity = result.stock_quantity - answer.quantity
                connection.query(
                    "UPDATE product SET ? WHERE ?",
                [
                    {
                    stock_quantity:  newQuantity
                    },
                    {
                    id: item.id
                    }
                ],
                function(error){
                    if (error) throw error;
                    var cost = answer.quantity*item.price
                    console.log("Purchase successful! Your cost is "+cost);
                }
            )
        }
})
}

// app should tehm prompt users with two messages:
    // 1. ask the ID of the product they want to purchase
    // 2. how many units they would like to buy



// app should check if store has enough stuff to sell. if not, order would be prevented from going though and log "insufficient quantity"


// if does have enough stuff, fullfill the customer's order.
// 1. updating the SQL database
// 2. show the customer the total cost of their purchase



