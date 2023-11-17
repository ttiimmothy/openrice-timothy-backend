import { Dish } from '../../interfaces/dish.interface';
export declare class DishEntity implements Dish {
    dish_id: string;
    name: string;
    active: boolean;
    created_at: Date;
}
