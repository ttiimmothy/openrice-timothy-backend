import { UpdateReviewDto } from './dto/update_review.dto';
import { CreateReviewDto } from './dto/create_review.dto';
import { ReviewService } from './review.service';
import { ReviewEntity } from './dto/entity/review.entity';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    getReviews(): Promise<ReviewEntity[]>;
    getReviewByID(params: {
        review_id: string;
    }): Promise<ReviewEntity>;
    createReview(createReviewDto: CreateReviewDto): Promise<any>;
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
