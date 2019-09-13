
exports.seed = function(knex) {

  return knex('tasks').insert([
    {project_id: 1, task_number: 1, description: "Go to the kitchen", notes: 'Do not die on the way', completed: false},
    {project_id: 1, task_number: 2, description: "Start the water", notes: 'Really hot water', completed: false},
    {project_id: 2, task_number: 1, description: "Breathe, keep breathing", notes: 'Do not stop breathing', completed: false},
    {project_id: 2, task_number: 2, description: "Look around", notes: 'Do not look down', completed: false},
    {project_id: 2, task_number: 3, description: "Use your head", notes: 'Not like that', completed: false},
  ])
};
