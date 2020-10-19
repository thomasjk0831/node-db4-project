exports.seed = function (knex) {
    const recipes = [
       {
           recipe_name: "tomato soup",
       },
       {
           recipe_name: "pizza",
       },
       
    ]

    return knex("recipes").insert(recipes)
}