import { PhotoCategory } from 'src/photoCategory/interfaces/photoCategory.interface';
export declare class PhotoCategoryEntity implements PhotoCategory {
    photo_category_id: string;
    name: string;
    active: boolean;
    created_at: Date;
}
