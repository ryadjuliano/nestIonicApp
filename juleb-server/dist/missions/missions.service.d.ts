import { Mission } from 'src/models/mission.model';
export declare class MissionsService {
    missions: Mission[];
    getMissions(): Promise<Mission[]>;
}
