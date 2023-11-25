import { Knex } from 'knex';
import { UpdateReviewDto } from './dto/update_review.dto';
import { CreateReviewDto } from './dto/create_review.dto';
export declare class ReviewService {
    private readonly knex;
    constructor(knex: Knex);
    getReviews(): Promise<any[]>;
    getReviewByID(id: string): Promise<any[]>;
    createReview(review: CreateReviewDto, restaurantID: string, photo_category_id: string, fileExtension?: string): Promise<any[]>;
    updateReview(id: string, review: UpdateReviewDto): Promise<any[]>;
    deleteReview(id: string): Promise<any[]>;
    getReviewerName(userID: string): Promise<any[]>;
    getReviewRestaurantName(restaurantID: string): Promise<any[]>;
    getReviewPhoto(reviewID: string): Promise<any[]>;
    getPhotoCategoryID(photoCategoryName: string): Promise<any[]>;
}
