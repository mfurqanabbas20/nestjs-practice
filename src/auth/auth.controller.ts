import { BadRequestException, Body, Controller, Get, Param, Post, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
    @Get('login/:id')
    findAll(@Param('id') id: string): string {
        if (id === "1") {
            return 'User Login Successfully';
        }
        throw new UnauthorizedException("User is not authorized to login");
    }

    @Post('register')
    createUser(@Body() createUserDto: CreateUserDto): string {
        if (!createUserDto?.name) {
            throw new BadRequestException("Name is required");
        }
        return `User Created Successfully`;
    }
}
