import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.css']
})
export class ErrorDisplayComponent implements OnInit {
  @Input() errorMsg :string;
  @Input() displayError:boolean;
  constructor() { }

  ngOnInit() {
  }

}
