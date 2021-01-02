import { Post } from "@nestjs/common";
import { Body } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { UserDto } from "./user.dto";

@Controller('user')
export class UserController {
    @Post()
    saveUser(@Body() userDto: UserDto): string {
        return Object.assign({
            data: { ...userDto },
            statusCode: 201,
            statusMsg: `saved successfully`
        })
    }
}