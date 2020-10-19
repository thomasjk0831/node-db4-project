exports.seed = function (knex) {
    const ingredients = [
       {
           ingredient_name: "tomato",
       },
       {
           ingredient_name: "gram of flour",
       },
       
    ]

    return knex("ingredients").insert(ingredients)
}