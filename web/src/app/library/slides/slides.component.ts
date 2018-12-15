import { Component, OnInit, NgZone } from '@angular/core';
import { DataComponent } from '../../data.component';
import { LibraryDataController } from '@example/client';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})


export class SlidesComponent extends DataComponent implements OnInit {
  constructor(public _ngZone: NgZone) {
    super(_ngZone);
    this.DataController = LibraryDataController;
    // this.DataModel = PlaylistModel;
  }
  displayModalNew: string;

  async ngOnInit() {
    this.loadItems();
  }


}
