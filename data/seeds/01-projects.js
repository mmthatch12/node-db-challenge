
exports.seed = function(knex) {

  return knex('projects').insert([
    {project_name: "Do the dishes", description: 'wash the dishes', completed: false},
    {project_name: "Wash the Car", description: 'Clean with soap and water', completed: false},
  ])
};
