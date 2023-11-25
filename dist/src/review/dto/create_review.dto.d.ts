export declare class CreateReviewDto {
    user_id: string;
    restaurant_id: string;
    title: string;
    content: string;
    rating: number;
    spending: number;
    visited_date: Date;
}
export declare class CreateReviewDtoExtended {
    createReviewDto: CreateReviewDto;
    restaurantID: string;
    fileExtension?: string;
}
