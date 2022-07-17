import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Lista 1', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Lista 2', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lista 3', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Lista 4', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Lista 5', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Lista 6', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Lista 7', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Lista 8', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Lista 9', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Lista 10', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'options'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
