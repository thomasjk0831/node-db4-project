exports.seed = function (knex) {
    const ingredient_list = [
       {
           recipes_id : 1,
           name: "tomato",
           quantity: 1.5
       },
       {
           recipes_id : 2,
           name: "tomato",
           quantity: 1.2
       },
       {
        recipes_id : 2,
        name: "gram of flour",
        quantity: 1.4
      },
       
    ]

    return knex("ingredient_list").insert(ingredient_list)
}