
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: "Create package.json",
          notes: "Use npm init -y",
          completed: true,
          project_id: 1
        },
        {
          description: "Plan Schema",
          completed: true,
          project_id: 1
        },
        {
          description: "Make migrations and seeds",
          completed: true,
          project_id: 1
        },
        {
          description: "Build helpers and endpoints",
          completed: false,
          project_id: 1
        },
        {
          description: "Build components",
          notes: "Don't forget to style!",
          completed: true,
          project_id: 2
        },
        {
          description: "Create initial state and reducer",
          notes: "Remember to connect everything using Redux",
          completed: true,
          project_id: 2
        },
        {
          description: "Spread the state into your components",
          notes: "Remember to use props.state_key even for functions",
          completed: true,
          project_id: 2
        }
      ]);
    });
};
