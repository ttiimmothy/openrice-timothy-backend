"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expectedUsersHashPassword = void 0;
const hash_1 = require("../../../global/lib/hash");
const UserRole_1 = require("../../../global/utils/enums/UserRole");
const expectedUsersHashPassword = async () => [
    {
        user_id: '123',
        username: 'Timothy',
        email: 'dinosauli2006@mgmail.com',
        password: await (0, hash_1.hashPassword)('Timothy'),
        role: UserRole_1.UserRole.Admin,
        active: true,
        created_at: new Date('2023-11-14'),
        modified_at: new Date('2023-11-14'),
    },
];
exports.expectedUsersHashPassword = expectedUsersHashPassword;
//# sourceMappingURL=expectedUsersHashPassword.js.map