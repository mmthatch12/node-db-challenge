
exports.seed = function(knex) {

  return knex('resources').insert([
    {resource_name: "Water", description: 'H2O'},
    {resource_name: "Soap", description: 'Cleans stuff'},
    {resource_name: "Brush", description: 'Brushes stuff'},
    {resource_name: "Broom", description: 'Sweeps stuff'},
  ])
};
