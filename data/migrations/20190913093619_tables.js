
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 255).unique().notNullable()
        tbl.text('description')
        tbl.boolean('completed').defaultTo(false).notNullable()
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description').notNullable()
        tbl.text('notes')
        tbl.boolean('task_completed').defaultTo(false).notNullable()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 255).unique().notNullable()
        tbl.text('description')
    })
};

exports.down = function(knex) {
  
};
