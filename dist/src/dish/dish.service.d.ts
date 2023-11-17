import { Knex } from 'knex';
export declare class DishService {
    private readonly knex;
    constructor(knex: Knex);
    getDishes(): Promise<any[]>;
    getDishByID(id: string): Promise<any[]>;
}
