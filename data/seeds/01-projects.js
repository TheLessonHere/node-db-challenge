
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: "Database Sprint Challenge",
          description: "Sprint challenge for making database schemas.",
          completed: false
        },
        {
          name: "Frontend Build Week",
          description: "Build Week for Frontend Frameworks Unit.",
          completed: true
        }
      ]);
    });
};
