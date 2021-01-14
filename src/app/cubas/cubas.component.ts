import { Component, OnInit } from '@angular/core';

export interface CubaElement {
  image: string;
  volume: number;
  usage: string;
  quantity: number;
}

const ELEMENT_DATA: CubaElement[] = [
  {image: 'assets/images/cuba.png', volume: 4, usage: 'Hydrogen', quantity: 1},
  {image: 'assets/images/cuba.png', volume: 4, usage: 'Lithium', quantity: 6},
  {image: 'assets/images/cuba.png', volume: 2, usage: 'Helium', quantity: 4},
  {image: 'assets/images/cuba.png', volume: 4, usage: 'Beryllium', quantity: 9},
  {image: 'assets/images/cuba.png', volume: 8, usage: 'Boron', quantity: 10},
  {image: 'assets/images/cuba.png', volume: 6, usage: 'Carbon', quantity: 12},
  {image: 'assets/images/cuba.png', volume: 7, usage: 'Nitrogen', quantity: 14},
  {image: 'assets/images/cuba.png', volume: 8, usage: 'Oxygen', quantity: 15},
  {image: 'assets/images/cuba.png', volume: 1, usage: 'Fluorine', quantity: 18},
  {image: 'assets/images/cuba.png', volume: 10, usage: 'Neon', quantity: 20},
];

@Component({
  selector: 'app-cubas',
  templateUrl: './cubas.component.html',
  styleUrls: ['./cubas.component.css']
})
export class CubasComponent implements OnInit {
  displayedColumns: string[] = ['image', 'volume', 'usage', 'quantity'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
