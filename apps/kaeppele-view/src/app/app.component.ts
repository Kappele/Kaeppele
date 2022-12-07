import { Component, OnInit } from '@angular/core';
import { CountdownService } from '@kaeppele/client';
import { isAfter } from 'date-fns';

@Component({
  selector: 'kaeppele-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'kaeppele-view';
  isLocked = true;

  constructor(private countdownService: CountdownService) {}

  async ngOnInit(): Promise<void> {
    this.isLocked = isAfter(await this.countdownService.getEndDate(), Date.now());
  }
}
