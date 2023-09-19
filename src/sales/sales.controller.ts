import { Controller, Get, Query, Req } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('api/sales')
export class SalesController {
    constructor(private readonly salesService: SalesService) {}

    @Get('byIntervalAndBranch')
    async getSalesByIntervalAndBranch(
        @Query('startDate') startDate: Date,
        @Query('endDate') endDate: Date,
        @Query('branchId') branchId: number,
    ) {
        const sales = await this.salesService.getSalesByIntervalAndBranch(
            new Date(startDate),
            new Date(endDate),
            0
        );

        return sales;
    }
}
