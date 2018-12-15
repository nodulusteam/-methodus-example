import { Component, OnInit, NgZone } from '@angular/core';
import { LibraryDataController } from '@example/client';
import { DataComponent } from '../data.component';


@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss']
})
export class ScreensComponent extends DataComponent implements OnInit {

  constructor(public _ngZone: NgZone) {
    super(_ngZone);
    this.DataController = LibraryDataController;
  }
  displayModalNew: string;

  async ngOnInit() {
    this.loadItems();
  }



}
