import { DishService } from './dish.service';
import { DishEntity } from './dto/entity/dish.entity';
export declare class DishController {
    private readonly dishService;
    constructor(dishService: DishService);
    getDishes(): Promise<DishEntity[]>;
    getDishByID(params: {
        dish_id: string;
    }): Promise<DishEntity>;
}
