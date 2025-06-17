"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    if (!(await knex.schema.hasTable('review_criteria'))) {
        await knex.schema.createTable('review_criteria', (table) => {
            table
                .uuid('review_criteria_id')
                .primary()
                .defaultTo(knex.raw('gen_random_uuid()'))
                .notNullable();
            table.uuid('review_id').notNullable();
            table.foreign('review_id').references('review.review_id');
            table.uuid('review_photo_id').notNullable();
            table
                .foreign('review_photo_id')
                .references('review_photo.review_photo_id');
            table.uuid('image_id');
            table.foreign('image_id').references('image.image_id');
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamps(false, true);
        });
    }
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTableIfExists('review_criteria');
}
exports.down = down;
//# sourceMappingURL=20231205075656_create_review_criteria.js.map