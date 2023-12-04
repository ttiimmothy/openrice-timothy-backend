"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    if (!(await knex.schema.hasTable('user_role'))) {
        await knex.schema.createTable('user_role', (table) => {
            table
                .uuid('user_role_id')
                .primary()
                .defaultTo(knex.raw('gen_random_uuid()'))
                .notNullable();
            table.uuid('user_role_name').notNullable();
            table.boolean('active').notNullable().defaultTo(true);
            table.timestamps(false, true);
        });
    }
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTableIfExists('user_role');
}
exports.down = down;
//# sourceMappingURL=20231119080545_create_user_role.js.map