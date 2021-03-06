import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input('type') type = 'button';
  @Input('addClass') addClass = '';
  @Input('disabled') disabled = false;
  @Output() onClick = new EventEmitter<any>();
  ngOnInit(): void {}
}
