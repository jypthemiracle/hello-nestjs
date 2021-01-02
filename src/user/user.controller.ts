import { Param, Post } from "@nestjs/common";
import { Body } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
        this.userService = userService;
    }

    @Get('list')
    findAll(): Promise<UserDto[]> {
        return this.userService.findAll();
    }

    @Get(':userId')
    findOne(@Param('userId') id: string): any | object {
        return this.userService.findOne(id);
    }

    @Post()
    saveUser(@Body() userDto: UserDto): string {
        this.userService.saveUser(userDto);
        return Object.assign({
            data: { ...userDto },
            statusCode: 201,
            statusMsg: `saved successfully`
        })
    }
}