import { Knex } from 'knex';
export declare class DistrictService {
    private readonly knex;
    constructor(knex: Knex);
    getDistricts(): Promise<any[]>;
    getDistrictByID(id: string): Promise<any[]>;
}
