"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    if (!(await knex.schema.hasTable('restaurant_payment'))) {
        await knex.schema.createTable('restaurant_payment', (table) => {
            table
                .uuid('restaurant_payment_id')
                .primary()
                .defaultTo(knex.raw('gen_random_uuid()'))
                .notNullable();
            table.uuid('restaurant_id').notNullable();
            table.foreign('restaurant_id').references('restaurant.restaurant_id');
            table.uuid('payment_method_id').notNullable();
            table
                .foreign('payment_method_id')
                .references('payment_method.payment_method_id');
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        });
    }
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTableIfExists('restaurant_payment');
}
exports.down = down;
//# sourceMappingURL=20231119084720_create_restaurant_payment.js.map