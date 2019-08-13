import { Injectable } from '@angular/core';
import{colemaan} from './colemaan';
import {myInfo} from './../assets/data/myInfo';

@Injectable({
  providedIn: 'root'
})
export class LoaddataService {

  constructor() { }

  loadMyInfo(): colemaan{
    return myInfo;
  }
}
