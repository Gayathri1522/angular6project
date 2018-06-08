import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TableService } from '../table.service';
import { Table } from './Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  characters: Table[];

  constructor(private tservice:TableService) { }

  ngOnInit() {
    this
    .tservice
    .getTable()
    .subscribe((data:Table[])=>{
      this.characters=data;
      });
    }

    settings={
      columns:{
        id:
        {
          title:"Id"
        },
        name:{
          title:"Name"
        },
        age:{
          title:"Age"
        }
      }
    };
}
