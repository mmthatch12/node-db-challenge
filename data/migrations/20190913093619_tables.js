
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 255).unique().notNullable()
        tbl.boolean('completed').defaultTo(false).notNullable()
    })
};

exports.down = function(knex) {
  
};
