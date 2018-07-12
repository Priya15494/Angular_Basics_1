import { Component, OnInit,OnDestroy } from '@angular/core';

//importing route related code
import {ActivatedRoute, Router} from "@angular/router";
import { ViewdataService } from '../viewdata.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 
  public currentView;
  constructor(private _route:ActivatedRoute,private router:Router, public viewdataService : ViewdataService) { 
    console.log("Constructor is called");
  }
  
  ngOnDestroy() {
    console.log("OnDestroy implemented in View");
  }

  ngOnInit() {
    console.log("ngOnInit called");
    //getting the name from the home
    let url=this._route.snapshot.paramMap.get('url');
    console.log(url);
    //this.viewdataservice.getSingleViewInformation(url);

    this.viewdataService.getSingleViewInformation(url).subscribe (
      data => {
          this.currentView=data;
          console.log(this.currentView);
      },
      error => {
        console.log(error.errorMessage)
      }
    )

  }
 

}
