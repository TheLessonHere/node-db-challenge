
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: "Lambda Training Kit"
        },
        {
          name: "Knex documentation",
          description: "Knex website info"
        },
        {
          name: "React documentation",
          description: "React website info"
        },
        {
          name: "Redux documentation",
          description: "Redux website info"
        }
      ]);
    });
};
