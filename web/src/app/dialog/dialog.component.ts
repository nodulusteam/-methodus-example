import { Component, OnInit, EventEmitter, Input, Output, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input()
  notification: Notification;
  @Output()
  close: EventEmitter<any> = new EventEmitter();
  @ViewChild('leDialog')
  private dialogElement: ElementRef;
  private nativeDialogElement: any;
  ngOnInit() {
    this.nativeDialogElement = this.dialogElement.nativeElement;
    this.nativeDialogElement.showModal();
  }
}
