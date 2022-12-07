import { Controller, Get } from '@nestjs/common';
import { parseISO } from 'date-fns';

@Controller('countdown')
export class CountdownController {
  @Get()
  GetCountdown(): Date {
    const date = parseISO(process.env.COUNTDOWN_END);

    return date;
  }
}
