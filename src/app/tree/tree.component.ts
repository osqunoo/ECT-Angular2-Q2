 import {FlatTreeControl} from '@angular/cdk/tree';
import {Component,Input,OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

/*const TREE_DATA: FoodNode[] = [
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
];*/

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'] 
})
export class TreeComponent implements OnInit  {
  @Input()
  info : any;
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

treeFlattener = new MatTreeFlattener(
    this._transformer, 
    node => node.level, 
    node => node.expandable, 
    node => node.children);

dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  

  constructor() {
    //const TREE_DATA = JSON.parse(this.info);
    //this.dataSource.data = TREE_DATA;
  }
  ngOnInit() {
    console.log(this.info);
    var treeJson = this.info;
    var treeObj = JSON.parse(treeJson["data"]);
    //const TREE_DATA = JSON.parse(this.info);
     this.dataSource.data = treeObj;
  }
  
}
