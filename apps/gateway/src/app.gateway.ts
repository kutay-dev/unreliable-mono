import { HttpService } from '@nestjs/axios';
import { All, Controller, Req, Res, UseGuards } from '@nestjs/common';
import type { Request, Response } from 'express';
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from './auth/auth.guard';

@UseGuards(AuthGuard)
@Controller()
export class AppGateway {
  constructor(private readonly http: HttpService) {}

  @All(['auth', 'auth/*path'])
  auth(@Req() req: Request, @Res() res: Response): Promise<any> {
    return this.forward(req, res, 'auth');
  }

  @All(['chat', 'chat/*path'])
  chat(@Req() req: Request, @Res() res: Response): Promise<any> {
    return this.forward(req, res, 'chat');
  }

  private async forward(
    req: Request,
    res: Response,
    base: string,
  ): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { host, 'content-length': _, ...headers } = req.headers;
    const response = await firstValueFrom(
      this.http.request({
        method: req.method as string | undefined,
        url: `http://${base}:3000${req.originalUrl}`,
        data: req.body as unknown,
        headers,
        validateStatus: () => true,
      }),
    );
    res.status(response.status).send(response.data);
  }
}
