import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//router module
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { ViewdataService } from './viewdata.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,   
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //router module for root method to declare possible routes in the application
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'view/:url',component:ViewComponent} 
    ])
  ],
  //can be accessed across  the application if we write in providers
  providers: [ViewdataService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
