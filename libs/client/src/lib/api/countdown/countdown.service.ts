import { Injectable } from '@angular/core';
import { get } from '../_shared/api.service';
import { ApiRoutes } from '../apiRoutes';
import { parseISO } from "date-fns"
@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  constructor() { }

  public async getEndDate(): Promise<Date>{
    return parseISO(await get<string>(ApiRoutes["countdown"]["get"]))
  }
}
