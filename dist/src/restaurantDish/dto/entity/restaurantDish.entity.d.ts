import { RestaurantDish } from '../../interfaces/restaurantDish.interface';
export declare class RestaurantDishEntity implements RestaurantDish {
    restaurant_dish_id: string;
    restaurant_id: string;
    dish_id: string;
    active: boolean;
    created_at: Date;
}
