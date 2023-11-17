import { PhotoCategoryService } from './photoCategory.service';
import { PhotoCategoryEntity } from './dto/entity/photoCategory.entity';
export declare class PhotoCategoryController {
    private readonly photoCategoryService;
    constructor(photoCategoryService: PhotoCategoryService);
    getPhotoCategories(): Promise<PhotoCategoryEntity[]>;
    getPhotoCategoryByID(params: {
        photo_category_id: string;
    }): Promise<PhotoCategoryEntity>;
}
