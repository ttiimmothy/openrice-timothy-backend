import { Photo } from 'src/photo/interfaces/photo.interface';
export declare class PhotoEntity implements Photo {
    photo_id: string;
    review_id: string;
    photo_category_id: string;
    photo_address: string;
    active: boolean;
    created_at: Date;
}
