import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'blinkers',
  templateUrl: './blinkers.component.html',
  styleUrls: ['./blinkers.component.css'],
})
export class BlinkersComponent implements OnInit {
  inputText;
  // tslint:disable-next-line: typedef
  onTyping() {
    console.log(this.inputText);
  }
  ngOnInit(): void {}
}
