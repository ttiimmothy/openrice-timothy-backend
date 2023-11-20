"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    if (!(await knex.schema.hasTable('photo'))) {
        await knex.schema.createTable('photo', (table) => {
            table
                .uuid('photo_id')
                .primary()
                .defaultTo(knex.raw('gen_random_uuid()'))
                .notNullable();
            table.uuid('review_id').notNullable();
            table.foreign('review_id').references('review.review_id');
            table.uuid('photo_category_id').notNullable();
            table
                .foreign('photo_category_id')
                .references('photo_category.photo_category_id');
            table.text('address').notNullable();
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        });
    }
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTableIfExists('photo');
}
exports.down = down;
//# sourceMappingURL=20231119084224_create_photo.js.map