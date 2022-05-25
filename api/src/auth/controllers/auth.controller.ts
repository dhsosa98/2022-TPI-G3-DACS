import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { RegisterUserDto } from '../dto/auth.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}


    @Public()
    @Post('/signup')
    getProfile(@Body() user: RegisterUserDto) {
        return this.authService.register(user);
    }
}