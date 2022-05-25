import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guards';
import { Roles } from 'src/decorators/roles.decorator';
import { PackageDto, PackageOnUpdateDto } from '../dtos/Package.dto';
import { ValidatePackages } from '../interceptors/ValidatePackages.interceptor';
import { PackagesService } from '../services/Packages.service';
import { ReservedPackagesService } from '../services/ReservedPackages.service';

@Controller('/packages')
export class PackagesController {
  constructor(private readonly packageService: PackagesService) {}

  // @Delete('/:packageId')
  // deletePackageById(@Param('packageId') packageId: number): string {
  //   return this.packageService.deletePackageById(packageId);
  // }

  // @Post('/')
  // CreatePackage(@Body() tourismPackage: any) {
  //   return this.packageService.createPackage(tourismPackage);
  // }

  // @Post('/insurances')
  // createInsurance(@Body() insurance: any) {
  //   return this.packageService.createInsurance(insurance);
  // }
  @Get('/')
  @Roles(Role.Admin)
  getAllPackages() {
    return this.packageService.findAll();
  }

  @Get('/:id')
  getPackageById(@Param('id') id: number) {
    return this.packageService.findOne(id);
  }

  @Post('/')
  @UseInterceptors(ValidatePackages)
  createPackage(@Body() tourismPackage: PackageDto) {
    return this.packageService.create(tourismPackage);
  }

  @Delete('/:packageId')
  deletePackageById(@Param('packageId') packageId: number) {
    return this.packageService.delete(packageId);
  }

  @Patch('/:id')
  @UseInterceptors(ValidatePackages)
  updatePackage(@Body() pack: PackageOnUpdateDto, @Param('id') id: number) {
    return this.packageService.update(id, pack);
  }

}

