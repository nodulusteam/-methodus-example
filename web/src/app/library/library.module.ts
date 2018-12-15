import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';
import { VideosComponent } from './videos/videos.component';
import { SoundsComponent } from './sounds/sounds.component';
import { SlidesComponent } from './slides/slides.component';
import { LibraryComponent } from './library.component';

import { FormsModule } from '@angular/forms';
export * from './main/main.component';


export const libraryRoutes: Routes = [

  { path: 'videos', component: VideosComponent },
  { path: 'sounds', component: SoundsComponent },
  { path: 'slides', component: SlidesComponent },
];



@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [LibraryComponent, RouterModule],
  entryComponents: [LibraryComponent],
  declarations: [VideosComponent, SoundsComponent, SlidesComponent, LibraryComponent]
})
export class LibraryModule { }


