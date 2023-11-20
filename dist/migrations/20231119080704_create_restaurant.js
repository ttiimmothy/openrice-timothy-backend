"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    if (!(await knex.schema.hasTable('restaurant'))) {
        await knex.schema.createTable('restaurant', (table) => {
            table
                .uuid('restaurant_id')
                .primary()
                .defaultTo(knex.raw('gen_random_uuid()'))
                .notNullable();
            table.text('name').notNullable();
            table.text('address').notNullable();
            table.text('phone').notNullable();
            table.uuid('district_id').notNullable();
            table.foreign('district_id').references('district.district_id');
            table.text('postal_code').notNullable();
            table.decimal('latitude', 6, 2).notNullable();
            table.decimal('longitude', 6, 2).notNullable();
            table.text('intro').notNullable();
            table.text('opening_hours').notNullable();
            table.text('cover_image_url');
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
            table.timestamp('modified_at').notNullable().defaultTo(knex.fn.now());
        });
    }
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTableIfExists('restaurant');
}
exports.down = down;
//# sourceMappingURL=20231119080704_create_restaurant.js.map