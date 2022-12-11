import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import fetch from 'node-fetch';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async postHello() {
    const res = await fetch(
      'https://imjaehoo.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=OwndE7DgN1Nv2RsPA2euHG&state=1234&redirect_uri=https://moico-admin.vercel.app&scope=mall.read_application',
    );

    console.log(res);

    return res;
  }
}
