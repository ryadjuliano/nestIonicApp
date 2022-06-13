import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUser() {
    return this.userService.findAll();
  }
  @Get(':id')
  async findOneById(@Param() params): Promise<UserDto> {
    return await this.userService.findById(params.id);
  }

  @Post()
  async create(@Body() user: UserDto): Promise<UserDto> {
    return (await this.userService.insert(user)) as UserDto;
  }

  // @Put(':id')
  // async update(@Body() updatedBook: UserDto, @Param() params): Promise<UserDto> {
  //   const oldUser = await this.userService.findById(params.id);
  //   return await this.userService.update(oldUser, updateUser);
  // }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.userService.delete(params.id);
  }
}
