import { Review } from '../../interfaces/review.interface';
export declare class ReviewEntity implements Review {
    review_id: string;
    user_id: string;
    restaurant_id: string;
    username?: string;
    restaurantName?: string;
    title: string;
    content: string;
    rating: number;
    spending: number;
    visited_date: Date;
    photo?: string;
    active: boolean;
    created_at: Date;
    modified_at: Date;
}
