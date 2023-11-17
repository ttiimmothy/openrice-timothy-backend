import { RestaurantDishService } from './restaurantDish.service';
import { CreateRestaurantDishDto } from './dto/create-restaurantDish.dto';
import { RestaurantDishEntity } from './dto/entity/restaurantDish.entity';
export declare class RestaurantDishController {
    private readonly restaurantDishService;
    constructor(restaurantDishService: RestaurantDishService);
    getRestaurantDishes(): Promise<RestaurantDishEntity[]>;
    getRestaurantDishByID(params: {
        restaurant_dish_id: string;
    }): Promise<RestaurantDishEntity>;
    createRestaurantDish(createRestaurantDishDto: CreateRestaurantDishDto): Promise<RestaurantDishEntity>;
    deleteRestaurantDish(params: {
        restaurant_dish_id: string;
    }): Promise<RestaurantDishEntity>;
}
