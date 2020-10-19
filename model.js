const db = require("./data/db-config")

module.exports = {
    getRecipes,
    getShoppingList,
    
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipes_id){
    return db('ingredient_list').where({ recipes_id})
}