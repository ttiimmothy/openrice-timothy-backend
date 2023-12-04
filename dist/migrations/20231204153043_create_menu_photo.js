"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    if (!(await knex.schema.hasTable('menu_photo'))) {
        await knex.schema.createTable('menu_photo', (table) => {
            table
                .uuid('menu_photo_id')
                .primary()
                .defaultTo(knex.raw('gen_random_uuid()'))
                .notNullable();
            table.uuid('restaurant_id').notNullable();
            table.foreign('restaurant_id').references('restaurant.restaurant_id');
            table.uuid('photo_category_id').notNullable();
            table
                .foreign('photo_category_id')
                .references('photo_category.photo_category_id');
            table.text('photo_url').notNullable();
            table.uuid('image_id');
            table.foreign('image_id').references('image.image_id');
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        });
    }
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTableIfExists('menu_photo');
}
exports.down = down;
//# sourceMappingURL=20231204153043_create_menu_photo.js.map