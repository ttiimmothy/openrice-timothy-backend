"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    if (!(await knex.schema.hasTable('user'))) {
        await knex.schema.createTable('user', (table) => {
            table
                .uuid('user_id')
                .primary()
                .defaultTo(knex.raw('gen_random_uuid()'))
                .notNullable();
            table.text('email').notNullable();
            table.text('username').notNullable();
            table.text('password').notNullable();
            table.string('role');
            table.uuid('user_role_id');
            table.foreign('user_role_id').references('user_role.user_role_id');
            table.text('profile_picture_url');
            table.uuid('image_id');
            table.foreign('image_id').references('image.image_id');
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
            table.timestamp('modified_at');
        });
    }
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTableIfExists('user');
}
exports.down = down;
//# sourceMappingURL=20231119084534_create_user.js.map