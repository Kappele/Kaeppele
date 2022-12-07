import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountdownService } from "@kaeppele/client"
import { intervalToDuration, formatDuration } from 'date-fns'

@Component({
  selector: 'kaeppele-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  public releaseDateString: Optional<string>;
  private endDate: Optional<Date>;
  private interval: Optional<NodeJS.Timer>;

  constructor(private countdownService: CountdownService){}
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  async ngOnInit(): Promise<void> {
    this.endDate = await this.countdownService.getEndDate();

    this.interval = setInterval(() => this.UpdateCountdown(), 500)
  }

  UpdateCountdown() {
    if (!this.endDate) {
      return;
    }

    const releaseDate = intervalToDuration({
      start: Date.now(),
      end: this.endDate
    })

    const dateString = formatDuration(releaseDate, {
      zero: true,
      delimiter: ","
    })

    this.releaseDateString = this.removeUnusedFormat(dateString);
  }
  
  removeUnusedFormat(dateString: string): Optional<string> {
    const dateSegments = dateString.split(",")
    let returnString = "";
    let isLeading0 = true; 
    for (const dateSegment of dateSegments) {
      if (dateSegment.startsWith("0") && isLeading0) {
        continue;
      }
      isLeading0 = false
      returnString += dateSegment + " "
    }
    return returnString;
  }
}
