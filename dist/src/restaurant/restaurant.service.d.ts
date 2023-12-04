import { Knex } from 'knex';
import { CreateRestaurantDto } from './dto/create_restaurant.dto';
import { UpdateRestaurantDto } from './dto/update_restaurant.dto';
export declare class RestaurantService {
    private readonly knex;
    constructor(knex: Knex);
    getRestaurants(limit: number | null, offset: number): Promise<any[]>;
    getRestaurantsByDish(dish: string): Promise<any[]>;
    getRestaurantByID(id: string): Promise<any[]>;
    createRestaurant(restaurant: CreateRestaurantDto, fileExtension: string): Promise<any[]>;
    updateRestaurant(id: string, restaurant: UpdateRestaurantDto): Promise<any[]>;
    deleteRestaurant(id: string): Promise<any[]>;
    getAverageRating(id: string): Promise<number>;
    getReviewCount(id: string): Promise<string | number>;
}
