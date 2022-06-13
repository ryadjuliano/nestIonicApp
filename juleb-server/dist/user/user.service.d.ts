import { User } from 'src/models/user.model';
export declare class UserService {
    user: User[];
    getUser(): Promise<User[]>;
}
