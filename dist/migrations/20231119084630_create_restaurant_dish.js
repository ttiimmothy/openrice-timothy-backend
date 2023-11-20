"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    if (!(await knex.schema.hasTable('restaurant_dish'))) {
        await knex.schema.createTable('restaurant_dish', (table) => {
            table
                .uuid('restaurant_dish_id')
                .primary()
                .defaultTo(knex.raw('gen_random_uuid()'))
                .notNullable();
            table.uuid('restaurant_id').notNullable();
            table.foreign('restaurant_id').references('restaurant.restaurant_id');
            table.uuid('dish_id').notNullable();
            table.foreign('dish_id').references('dish.dish_id');
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        });
    }
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTableIfExists('restaurant_dish');
}
exports.down = down;
//# sourceMappingURL=20231119084630_create_restaurant_dish.js.map