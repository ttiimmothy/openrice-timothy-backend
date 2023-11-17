import { DistrictService } from './district.service';
import { DistrictEntity } from './dto/entity/district.entity';
export declare class DistrictController {
    private readonly districtService;
    constructor(districtService: DistrictService);
    getDistricts(): Promise<DistrictEntity[]>;
    getDistrictByID(params: {
        district_id: string;
    }): Promise<DistrictEntity>;
}
