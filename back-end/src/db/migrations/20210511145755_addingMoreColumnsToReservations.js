exports.up = function (knex) {
  return knex.schema.table("reservations", (table) => {
    table.string("first_name");
    table.string("last_name");
    table.string("mobile_number");
    table.date("reservation_date");
    table.time("reservation_time");
    table.integer("people");
  });
};

exports.down = function (knex) {
  return knex.schema.table("reservations", (table) => {
    table.dropColumns(
      "people",
      "reservation_time",
      "reservation_date",
      "mobile_number",
      "last_name",
      "first_name"
    );
  });
};
