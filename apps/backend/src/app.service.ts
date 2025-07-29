import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): { status: string; timestamp: string } {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
    };
  }

  getHomeMessage(): { message: string; company: string } {
    return {
      message: 'Something Amazing is Coming Soon',
      company: 'Alpha5 Labs',
    };
  }
}
