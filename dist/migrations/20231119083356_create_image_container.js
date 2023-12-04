"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    if (!(await knex.schema.hasTable('image_container'))) {
        await knex.schema.createTable('image_container', (table) => {
            table
                .uuid('image_container_id')
                .primary()
                .defaultTo(knex.raw('gen_random_uuid()'))
                .notNullable();
            table.text('image_container_url').notNullable();
            table.uuid('image_category_id').notNullable();
            table
                .foreign('image_category_id')
                .references('image_category.image_category_id');
            table.uuid('photo_category_id').notNullable();
            table
                .foreign('photo_category_id')
                .references('photo_category.photo_category_id');
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamps(false, true);
            table.uuid('date_id').notNullable();
            table.foreign('date_id').references('date.date_id');
        });
    }
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTableIfExists('image_container');
}
exports.down = down;
//# sourceMappingURL=20231119083356_create_image_container.js.map