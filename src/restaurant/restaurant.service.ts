import { Inject, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { CreateRestaurantDto } from './dto/create_restaurant.dto';
import { UpdateRestaurantDto } from './dto/update_restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(@Inject('KnexConnection') private readonly knex: Knex) {}

  async getRestaurants(limit: number | null, offset: number) {
    if (limit) {
      return await this.knex
        .select('*')
        .from('restaurant')
        .limit(limit)
        .offset(offset);
    } else {
      return await this.knex.select('*').from('restaurant').offset(offset);
    }
  }

  async getRestaurantsByDish(dish: string) {
    return await this.knex
      .select('restaurant.*')
      .from('restaurant')
      .leftOuterJoin(
        'restaurant_dish',
        'restaurant.restaurant_id',
        'restaurant_dish.restaurant_id',
      )
      .leftOuterJoin('dish', 'restaurant_dish.dish_id', 'dish.dish_id')
      .where('dish.name', dish);
  }

  async getRestaurantByID(id: string) {
    return await this.knex
      .select('*')
      .from('restaurant')
      .where('restaurant_id', id);
  }

  async createRestaurant(
    restaurant: CreateRestaurantDto,
    fileExtension: string,
  ) {
    const restaurantDetail = await this.knex
      .insert({
        ...restaurant,
        created_at: new Date(),
        modified_at: new Date(),
        active: true,
      })
      .into('restaurant')
      .returning('*');

    if (fileExtension) {
      return await this.knex('restaurant')
        .update({
          cover_image_url: `${process.env.IMAGE_PREFIX}/restaurant/${restaurantDetail[0].restaurant_id}/cover_image_url.${fileExtension}`,
          modified_at: new Date(),
        })
        .where('restaurant_id', restaurantDetail[0].restaurant_id)
        .returning('*');
    }

    return restaurantDetail;
  }

  async updateRestaurant(id: string, restaurant: UpdateRestaurantDto) {
    return await this.knex('restaurant')
      .update({ ...restaurant, modified_at: new Date() })
      .where('restaurant_id', id)
      .returning('*');
  }

  async deleteRestaurant(id: string) {
    return await this.knex('restaurant')
      .update({ active: false, modified_at: new Date() })
      .where('restaurant_id', id)
      .returning('*');
  }

  async getAverageRating(id: string) {
    const totalRating = (
      await this.knex('review').sum('rating').where('restaurant_id', id)
    )[0].sum;
    const ratingCount = (
      await this.knex('review').count('rating').where('restaurant_id', id)
    )[0].count;
    return parseInt(totalRating) / parseInt(ratingCount as string);
  }

  async getReviewCount(id: string) {
    return (
      await this.knex('review').count('rating').where('restaurant_id', id)
    )[0].count;
  }
}
