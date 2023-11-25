import { UpdateReviewDto } from './dto/update_review.dto';
import { CreateReviewDtoExtended } from './dto/create_review.dto';
import { ReviewService } from './review.service';
import { ReviewEntity } from './dto/entity/review.entity';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    getReviews(restaurantID: string): Promise<ReviewEntity[]>;
    getReviewByID(params: {
        review_id: string;
    }): Promise<ReviewEntity>;
    createReview(body: CreateReviewDtoExtended, photoCategory: string): Promise<any>;
    updateReview(params: {
        review_id: string;
    }, updateReviewDto: UpdateReviewDto): Promise<ReviewEntity | {
        message: string;
    }>;
    deleteReview(params: {
        review_id: string;
    }): Promise<ReviewEntity | {
        message: string;
    }>;
}
