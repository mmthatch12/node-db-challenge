
exports.seed = function(knex) {

  return knex('tasks').insert([
    {project_id: 1, task_number: 1, description: "Go to the kitchen", notes: 'Do not die on the way', task_completed: false},
    {project_id: 1, task_number: 2, description: "Start the water", notes: 'Really hot water', task_completed: false},
    {project_id: 2, task_number: 1, description: "Breathe, keep breathing", notes: 'Do not stop breathing', task_completed: false},
    {project_id: 2, task_number: 2, description: "Look around", notes: 'Do not look down', task_completed: false},
    {project_id: 2, task_number: 3, description: "Use your head", notes: 'Not like that', task_completed: false},
  ])
};
