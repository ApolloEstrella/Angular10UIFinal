import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-cancel-btn',
  templateUrl: './add-cancel-btn.component.html',
  styleUrls: ['./add-cancel-btn.component.css']
})
export class AddCancelBtnComponent {

  @Input() label: string;
  @Input() label2: string;

  @Input() functionCall: string;
  @Input() functionCall2: string;

  @Output() onClick = new EventEmitter<any>();
  @Output() onClick2 = new EventEmitter<any>();

  constructor() { }

  onClickButton(event) {

    this.onClick.emit(event);

  }

  onClickButton2(event) {

    this.onClick2.emit(event);

  }

}
