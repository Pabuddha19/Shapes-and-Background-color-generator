import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss'],
})
export class SecondComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  colors: any = [
    { id: 1, color: 'red' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'orange' },
  ];
  shapes: any = [
    { id: 1, shape: 'circle' },
    { id: 2, shape: 'rectangle' },
    { id: 3, shape: 'square' },
  ];
}
