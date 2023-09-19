import { Controller, Get } from '@nestjs/common';

@Controller('api/sales')
export class SalesController {

    @Get("sales-by-interval")
    getSalesByInterval() {
        return {
            message: "Hello"
        };
    }
}
