import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from '../decorators/public.decorator';
import { RegisterUserDto } from '../dto/auth.dto';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/profile')
  async getProfile(@Request() req) {
    return this.authService.getProfile(req.user.uid);
  }

  @Public()
  @Post('/signup')
  signup(@Body() user: RegisterUserDto) {
    return this.authService.register(user);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
