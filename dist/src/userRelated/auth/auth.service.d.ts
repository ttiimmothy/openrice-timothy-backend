import { Knex } from 'knex';
export declare class AuthService {
    private readonly knex;
    constructor(knex: Knex);
    login(username: string): Promise<any[]>;
    validateToken(token: string): any;
}
