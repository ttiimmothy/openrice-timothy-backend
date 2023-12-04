"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    if (!(await knex.schema.hasTable('image_category'))) {
        await knex.schema.createTable('image_category', (table) => {
            table
                .uuid('image_category_id')
                .primary()
                .defaultTo(knex.raw('gen_random_uuid()'))
                .notNullable();
            table.text('image_category_name').notNullable();
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamps(false, true);
            table.uuid('date_id').notNullable();
            table.foreign('date_id').references('date.date_id');
        });
    }
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTableIfExists('image_category');
}
exports.down = down;
//# sourceMappingURL=20231119083326_create_image_category.js.map