"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    if (!(await knex.schema.hasTable('subscribe'))) {
        await knex.schema.createTable('subscribe', (table) => {
            table
                .uuid('subscribe_id')
                .primary()
                .defaultTo(knex.raw('gen_random_uuid()'))
                .notNullable();
            table.uuid('user_id').notNullable();
            table.foreign('user_id').references('user.user_id');
            table.uuid('restaurant_id').notNullable();
            table.foreign('restaurant_id').references('restaurant.restaurant_id');
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        });
    }
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTableIfExists('subscribe');
}
exports.down = down;
//# sourceMappingURL=20231119083356_create_subscribe.js.map