import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreensComponent } from './screens.component';
export { ScreensComponent } from './screens.component';

import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule
  ],
  declarations: [ScreensComponent],
  entryComponents: [ScreensComponent],
  exports: [ScreensComponent]
})
export class ScreensModule { }
