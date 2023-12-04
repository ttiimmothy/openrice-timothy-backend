import { CreateRestaurantDtoExtended } from './dto/create_restaurant.dto';
import { UpdateRestaurantDto } from './dto/update_restaurant.dto';
import { RestaurantService } from './restaurant.service';
import { RestaurantEntity } from './dto/entity/restaurant.entity';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    getRestaurants(limit: number, offset: number, name: string): Promise<RestaurantEntity[]>;
    getRestaurantsByDish(dish: string): Promise<RestaurantEntity[]>;
    getRestaurantByID(params: {
        restaurant_id: string;
    }): Promise<RestaurantEntity>;
    createRestaurant(body: CreateRestaurantDtoExtended): Promise<RestaurantEntity>;
    updateRestaurant(params: {
        restaurant_id: string;
    }, updateRestaurantDto: UpdateRestaurantDto): Promise<RestaurantEntity | {
        message: string;
    }>;
    deleteRestaurant(params: {
        restaurant_id: string;
    }): Promise<RestaurantEntity | {
        message: string;
    }>;
}
