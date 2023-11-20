import { UserRole } from '../../../global/utils/enums/UserRole';
export declare const expectedUsersHashPassword: () => Promise<{
    user_id: string;
    username: string;
    email: string;
    password: any;
    role: UserRole;
    active: boolean;
    created_at: Date;
    modified_at: Date;
}[]>;
