"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissionsService = void 0;
const common_1 = require("@nestjs/common");
let MissionsService = class MissionsService {
    constructor() {
        this.missions = [
            {
                id: 1,
                title: 'Rescue cat stuck in asteroid',
                reward: 500,
                active: true,
            },
            {
                id: 2,
                title: 'Escort Royal Fleet',
                reward: 5000,
                active: true,
            },
            {
                id: 3,
                title: 'Pirates attacking the station',
                reward: 2500,
                active: false,
            },
        ];
    }
    async getMissions() {
        return this.missions;
    }
};
MissionsService = __decorate([
    (0, common_1.Injectable)()
], MissionsService);
exports.MissionsService = MissionsService;
//# sourceMappingURL=missions.service.js.map