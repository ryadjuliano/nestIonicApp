import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      return await this.usersRepository.find({});
    } catch (err) {
      return err;
    }
  }
  async findById(id: string): Promise<User> {
    try {
      return await this.usersRepository.findOneById(id);
    } catch (err) {
      return err;
    }
  }

  async insert(user: UserDto): Promise<User> {
    const newUser = new User();

    Object.keys(user).forEach((key) => {
      newUser[key] = user[key];
    });

    try {
      return await this.usersRepository.save(newUser);
    } catch (err) {
      return err;
    }
  }

  async delete(id: string) {
    try {
      return await this.usersRepository.delete(id);
    } catch (err) {
      return err;
    }
  }

  async update(oldUser: User, updated_values: UserDto): Promise<User> {
    const updateUser = oldUser;

    Object.keys(updated_values).forEach((key) => {
      updateUser[key] = updated_values[key];
    });

    try {
      return await this.usersRepository.save(updateUser);
    } catch (err) {
      return err;
    }
  }
}
