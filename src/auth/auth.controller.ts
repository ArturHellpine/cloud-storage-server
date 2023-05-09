import {Body, Controller, Post, UseGuards} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {ApiBody} from "@nestjs/swagger";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {AuthService} from "./auth.service";
import {UserEntity} from "../users/entities/user.entity";
import {LocalAuthGuard} from "./guards/local.guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiBody({type: CreateUserDto})
    async login(@Body() req: CreateUserDto) {
        return this.authService.login(req as UserEntity)
    }

    @Post('/register')
    register(@Body() dto: CreateUserDto) {
        return this.authService.register(dto)
    }
}