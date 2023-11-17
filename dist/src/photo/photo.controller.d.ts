import { PhotoService } from './photo.service';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { PhotoEntity } from './dto/entity/photo.entity';
export declare class PhotoController {
    private readonly photoService;
    constructor(photoService: PhotoService);
    getPhotos(): Promise<PhotoEntity[]>;
    getPhotoByID(params: {
        photo_id: string;
    }): Promise<PhotoEntity>;
    createPhoto(createPhotoDto: CreatePhotoDto): Promise<PhotoEntity>;
    deletePhoto(params: {
        photo_id: string;
    }): Promise<PhotoEntity>;
}
