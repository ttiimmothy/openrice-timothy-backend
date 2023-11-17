import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { RestaurantService } from './restaurant.service';
import { RestaurantEntity } from './dto/entity/restaurant.entity';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    getRestaurants(limit: number, offset: number, name: string): Promise<RestaurantEntity[]>;
    getRestaurantByID(params: {
        restaurant_id: string;
    }): Promise<RestaurantEntity>;
    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<RestaurantEntity>;
    updateRestaurant(params: {
        id: string;
    }, updateRestaurantDto: UpdateRestaurantDto): Promise<RestaurantEntity>;
    deleteRestaurant(params: {
        id: string;
    }): Promise<RestaurantEntity>;
}
