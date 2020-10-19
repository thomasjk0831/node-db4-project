const express = require ('express')
const Recipes = require('./model')
const server = express()
server.use(express.json())

server.get('/api/recipes/', (req,res)=>{
    Recipes.getRecipes()
    .then(recipes =>{
        res.json(recipes)
    })
    .catch(err=>{
        res.status(500).json({msg: "server error"})
    })
})

server.get('/api/recipes/:id/shoppingList', (req,res)=>{
    console.log(req.params.id)
    Recipes.getShoppingList(req.params.id)
    .then(list => {
        res.status(200).json({data: list})
    })
    .catch(err => {
        res.status(500).json({msg: err.message})
    })
})



module.exports = server