import { Knex } from 'knex';
import { UpdateReviewDto } from './dto/update-review.dto';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewService {
    private readonly knex;
    constructor(knex: Knex);
    getReviews(): Promise<any[]>;
    getReviewByID(id: string): Promise<any[]>;
    createReview(review: CreateReviewDto): Promise<any[]>;
    updateReview(id: string, review: UpdateReviewDto): Promise<any[]>;
    deleteReview(id: string): Promise<any[]>;
    getReviewerName(userID: string): Promise<any[]>;
    getReviewRestaurantName(restaurantID: string): Promise<any[]>;
}
