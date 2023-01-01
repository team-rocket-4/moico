import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { cafe24ClientId } from './constants/cafe24-client-id';
import axios from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/cafe24/malls/:mallId/products/:productId')
  getProduct(
    @Param('mallId') mallId: string,
    @Param('productId') productId: number,
  ) {
    return axios.get(
      `https://${mallId}.cafe24api.com/api/v2/productsdetail/${productId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Cafe24-Client-Id': cafe24ClientId,
        },
      },
    );
  }
}
