import { Knex } from 'knex';
export declare class PhotoCategoryService {
    private readonly knex;
    constructor(knex: Knex);
    getPhotoCategories(): Promise<any[]>;
    getPhotoCategoryByID(id: string): Promise<any[]>;
}
