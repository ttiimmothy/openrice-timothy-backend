export declare class CreateRestaurantDto {
    name: string;
    address: string;
    district_id: string;
    latitude: number;
    longitude: number;
    postal_code: string;
    phone: string;
    intro: string;
    opening_hours: string;
    cover_image_url?: string;
}
export declare class CreateRestaurantDtoExtended {
    createRestaurantDto: CreateRestaurantDto;
    fileExtension?: string;
}
