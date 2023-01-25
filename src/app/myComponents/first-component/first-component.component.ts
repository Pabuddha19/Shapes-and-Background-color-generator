import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  selectedColor: any;
  selectedShape: any;

  colors: any = [
    { id: 1, color: 'red' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'green' },
  ];
  shapes: any = [
    { id: 1, shape: 'circle' },
    { id: 2, shape: 'rectangle' },
    { id: 3, shape: 'square' },
  ];

  onShapeChange(event: any) {
    console.log(event.target.value);
    this.selectedShape = event.target.value;
    // this.selectedShape = event.target.options[event.target.options.selectedIndex].text;
    // console.log(event.target.options[event.target.options.selectedIndex].text);
  }

  onColorChange(event: any) {
    console.log(event.target.value);
    this.selectedColor = event.target.value;
  }
}
