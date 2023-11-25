import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto/create_photo.dto';
import { PhotoEntity } from './dto/entity/photo.entity';
export declare class PhotoController {
    private readonly photoService;
    constructor(photoService: PhotoService);
    getPhotos(): Promise<PhotoEntity[]>;
    getPhotoByID(params: {
        photo_id: string;
    }): Promise<PhotoEntity>;
    getReviewPhotos(restaurantID: string): Promise<PhotoEntity[]>;
    getMenuPhotos(restaurantID: string): Promise<PhotoEntity[]>;
    createPhoto(createPhotoDto: CreatePhotoDto, photoCategory: string): Promise<PhotoEntity[]>;
    deletePhoto(params: {
        photo_id: string;
    }): Promise<PhotoEntity | {
        message: string;
    }>;
}
