import { Component, OnInit, NgZone } from '@angular/core';
import { LibraryDataController } from '@example/client';
import { DataComponent } from '../data.component';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent extends DataComponent implements OnInit {
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
