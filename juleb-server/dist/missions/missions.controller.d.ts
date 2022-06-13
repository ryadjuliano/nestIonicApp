import { MissionsService } from './missions.service';
export declare class MissionsController {
    private missionsService;
    constructor(missionsService: MissionsService);
    getMissions(): Promise<import("../models/mission.model").Mission[]>;
}
