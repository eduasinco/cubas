import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CubasService} from '../services/cubas.service';
import {MatTableDataSource} from '@angular/material/table';

export interface CubaElement {
  image: string;
  volume: number;
  quantity: number;
  usage: string;
}

@Component({
  selector: 'app-cubas',
  templateUrl: './cubas.component.html',
  styleUrls: ['./cubas.component.css']
})
export class CubasComponent implements OnInit {
  displayedColumns: string[] = ['image', 'volume', 'usage', 'quantity'];
  cubas: CubaElement[] = [];

  constructor(
    private cubasService: CubasService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCubas();
  }

  getCubas() {
    this.cubasService.getCubas()
      .subscribe((data) => this.cubas = data);
  }

  addCuba() {
    this.cubasService.addCuba({image: '', volume: Math.floor(Math.random() * Math.floor(100)), quantity: 120, usage: 'Stones'})
      .subscribe(cuba => {
        this.cubas = new MatTableDataSource([cuba]);
        this.cubas.splice(0, 0, cuba);
        this.cdr.detectChanges();
      });
  }
}
