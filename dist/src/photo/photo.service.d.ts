import { Knex } from 'knex';
import { CreatePhotoDto } from './dto/create_photo.dto';
export declare class PhotoService {
    private readonly knex;
    constructor(knex: Knex);
    getPhotos(): Promise<any[]>;
    getPhotoByID(id: string): Promise<any[]>;
    createPhoto(photo: CreatePhotoDto): Promise<any[]>;
    deletePhoto(id: string): Promise<any[]>;
}
