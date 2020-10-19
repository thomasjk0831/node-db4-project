
exports.up = function(knex) {
    return knex.schema
       .createTable("recipes", tbl => {
           tbl.increments()
           tbl.string("recipe_name").notNullable().unique()
       })
       .createTable("ingredients", tbl => {
           tbl.increments()
           tbl.string("ingredient_name").notNullable().unique()
       })
       .createTable("ingredient_list", tbl=>{
           tbl.increments()
           tbl.integer("recipes_id")
              .unsigned()
              .references("id")
              .inTable("recipes")
              .onDelete("RESTRICT")
              .onUpdate("CASCADE")
           tbl.integer("name")
              .references("ingredient_name")
              .inTable("ingredients")
              .onDelete("RESTRICT")
              .onUpdate("CASCADE")
           tbl.float("quantity").unsigned()
       })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("recipes")
        .dropTableIfExists("ingredients")
        
};
