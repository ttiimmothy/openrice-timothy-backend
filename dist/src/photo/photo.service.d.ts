import { Knex } from 'knex';
import { CreatePhotoDto } from './dto/create_photo.dto';
export declare class PhotoService {
    private readonly knex;
    constructor(knex: Knex);
    getPhotos(): Promise<any[]>;
    getPhotoByID(id: string): Promise<any[]>;
    getReviewPhotos(id: string): Promise<any[]>;
    getMenuPhotos(id: string): Promise<any[]>;
    createPhoto(photo: CreatePhotoDto, photo_category_id: string, photoCategory: string): Promise<any[]>;
    deletePhoto(id: string): Promise<any[]>;
    getPhotoCategoryID(photoCategoryName: string): Promise<any[]>;
}
