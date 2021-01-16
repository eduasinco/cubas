import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Cuba, CubasService} from '../services/cubas.service';
import {MatTableDataSource} from '@angular/material/table';
import {AppError} from '../common/app-error';
import {BadInputError} from '../common/bad-input-error';

@Component({
  selector: 'app-cubas',
  templateUrl: './cubas.component.html',
  styleUrls: ['./cubas.component.css']
})
export class CubasComponent implements OnInit {
  displayedColumns: string[] = ['image', 'volume', 'usage', 'quantity'];
  cubas: Cuba[] = [];

  constructor(
    private cubasService: CubasService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCubas();
  }

  getCubas() {
    this.cubasService.getCubas()
      .subscribe(
        (data) => this.cubas = data,
        (error: AppError) => {
          if (error instanceof BadInputError) {
            // Handle bad input
          } else {
            throw error;
          }
        });
  }

  addCuba() {
    this.cubasService.addCuba({image: '', volume: Math.floor(Math.random() * Math.floor(100)), quantity: 120, usage: 'Stones'})
      .subscribe(cuba => {
      });
  }
}
