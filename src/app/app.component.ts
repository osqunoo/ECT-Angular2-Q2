import { Component,OnInit } from '@angular/core';
import { TreeComponent } from './tree/tree.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    TREE_DATA:any[] =[]; 
  title = 'ECT-Angular2';
  TREE_DATA_JSON: string;

  constructor() {
    this.TREE_DATA = [
      {
        name: 'Fruit',
        children: [
          {name: 'Apple'},
          {name: 'Banana'},
          {name: 'Fruit loops'},
        ]
      }, {
        name: 'Vegetables',
        children: [
          {
            name: 'Green',
            children: [
              {name: 'Broccoli'},
              {name: 'Brussel sprouts'},
            ]
          }, {
            name: 'Orange',
            children: [
              {name: 'Pumpkins'},
              {name: 'Carrots'},
            ]
          },
        ]
      },
    ];
    this.TREE_DATA_JSON = JSON.stringify(this.TREE_DATA);
  }

  ngOnInit() {
    this.TREE_DATA = [
      {
        name: 'A',
        children: [
          {
            name: 'B',
            children:  [
              { name: 'C' }
            ] 
          }, {
            name: 'B2' 
          },
        ]
      }, {
        name: 'D',
        children: [
          {name: 'E'} 
        ]
      },
    ];
    this.TREE_DATA_JSON = JSON.stringify(this.TREE_DATA);
  }
}
