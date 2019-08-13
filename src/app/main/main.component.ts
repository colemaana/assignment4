import { Component, OnInit, Input } from '@angular/core';
import {FoodMenu} from './../foodMenu';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() breakList: FoodMenu;
  @Input() lunchList: FoodMenu;
  @Input() dinnerList: FoodMenu;
  
  constructor() { }

  ngOnInit() {
  }

}
