import { Component, OnInit,OnDestroy } from '@angular/core';
import { ViewdataService } from '../viewdata.service';
import { ajax } from 'rxjs/ajax';
import * as _ from 'underscore';

//decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  public allData;
  public finalData;
  public sortedData;
  public reverse;
  public subst;
 
  constructor(public viewdataService:ViewdataService) {
    console.log("service Constructor called in Home");
   }

  ngOnInit() {
    console.log("Init implemented in Home");
    this.viewdataService.getAllData().subscribe (
      data => {
        this.allData = data;
        this.finalData = this.allData[0].concat(this.allData[1],this.allData[2])
        
        this.reverse=_.sortBy(this.finalData, 'name');
        this.sortedData=this.reverse.reverse();
       // console.log(this.subst);
        console.log(this.sortedData);      
      },
      error => {
        console.log(error.errorMessage)
      }
    )

  }
  ngOnDestroy() {
    console.log("OnDestroy implemented in Home");
  }

}
