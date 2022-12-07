import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CountdownComponent } from './countdown/countdown.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CountdownComponent],
  exports: [CountdownComponent],
})
export class CommonUiModule {}
