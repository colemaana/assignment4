import { Component } from '@angular/core';
import {colemaan} from './colemaan';
import {FoodMenu} from './foodMenu';
import {LoaddataService} from './loaddata.service';
import breakfastMenu from 'src/assets/data/breakfast.json'; 
import lunchMenu from 'src/assets/data/lunch.json';
import dinnerMenu from 'src/assets/data/dinner.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colemaana-A4';

  pData: colemaan;

  breakData: FoodMenu[] = breakfastMenu.breakfastMenu;
  lunchData: FoodMenu[] = lunchMenu.lunchMenu;
  dinnerData: FoodMenu[] = dinnerMenu.dinnerMenu;

  constructor(private ldService: LoaddataService){}

  ngOnInit(){
    this.loadData();
  }

  loadData(): void{
    this.pData=this.ldService.loadMyInfo();
  }
}
