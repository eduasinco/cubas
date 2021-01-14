import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { CubasTableDataSource, CubasTableItem } from './cubas-table-datasource';
import {CubasService} from '../services/cubas.service';

@Component({
  selector: 'app-cubas-table',
  templateUrl: './cubas-table.component.html',
  styleUrls: ['./cubas-table.component.css']
})
export class CubasTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<CubasTableItem>;
  dataSource: CubasTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(
    private cubasService: CubasService,
  ) {}

  ngOnInit(): void {
    this.getCubas();
  }

  getCubas() {
    this.cubasService.getCubas()
      .subscribe((data) => this.dataSource = new CubasTableDataSource(data));
  }

  addCuba() {
    this.cubasService.addCuba({image: '', volume: Math.floor(Math.random() * Math.floor(100)), quantity: 120, usage: 'Stones'})
      .subscribe(cuba => {
        this.cubas.splice(0, 0, cuba);
        this.cubas = new CubasTableDataSource();
        this.cdr.detectChanges();
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
