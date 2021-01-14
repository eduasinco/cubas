import { Component, OnInit } from '@angular/core';
import {CubasService} from '../services/cubas.service';

export interface CubaElement {
  volume: number;
  quantity: number;
}

export interface CubaPaginator {
  docs: CubaElement[];
  totalDocs: 0;
  limit: 25;
  totalPages: 1;
  page: null;
  pagingCounter: null;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: boolean;
  nextPage: boolean;
}

@Component({
  selector: 'app-cubas',
  templateUrl: './cubas.component.html',
  styleUrls: ['./cubas.component.css']
})
export class CubasComponent implements OnInit {
  displayedColumns: string[] = ['volume', 'quantity'];
  cubas: CubaElement[] = [];

  constructor(private cubasService: CubasService) {}

  ngOnInit(): void {
    this.getCubas();
  }

  getCubas() {
    this.cubasService.getCubas()
      .subscribe((data) => this.cubas = data.docs);
  }
}
