const db = require("../data/db-config.js")

module.exports = {
    getRecipes,
    getShoppingList,
    
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(){
    return db('ingredient_list')
}