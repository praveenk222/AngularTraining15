import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpdataService } from 'src/app/services/httpdata.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements AfterViewInit {
  pagesize=5;
  dataSource :MatTableDataSource<PeriodicElement> ;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns: string[] = ['positions', 'name', 'weight', 'symbol'];
  
  constructor(private httpservice:HttpdataService){
     //this.gettodoList();
    this.dataSource=new MatTableDataSource(ELEMENT_DATA)
  }
ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
}
applyfilter(event:any){debugger
  let fitlervalue=event.target.value;
  fitlervalue=fitlervalue.trim();
fitlervalue=fitlervalue.toLowerCase();
this.dataSource.filter=fitlervalue;
}
  gettodoList(){
    this.httpservice.getAllTodos().subscribe((res:any)=>{
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
      // this.dataSource.sort=this.sort;
    })
  }
  editdata(data:PeriodicElement){
console.log(data)
  }
  deletedate(data:PeriodicElement){
console.log(data)
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];