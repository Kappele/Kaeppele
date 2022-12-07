import { Injectable } from '@angular/core';
import { parseISO } from 'date-fns';

import { get } from '../_shared/api.service';
import { ApiRoutes } from '../apiRoutes';
@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  public async getEndDate(): Promise<Date> {
    return parseISO(await get<string>(ApiRoutes['countdown']['get']));
  }
}
