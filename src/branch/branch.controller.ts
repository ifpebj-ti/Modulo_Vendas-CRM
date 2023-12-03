import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { BranchService } from './branch.service';

@Controller('api/branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Get('availableBranchs')
  async availableBranchs() {
    try {
      const branchs = await this.branchService.getAvailableBranchs()
      return { branchs: branchs };
    }
    catch(error) {
      console.log(error);
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
