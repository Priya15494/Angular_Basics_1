

import { Injectable } from '@angular/core';
//importing http client to make the requests
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ViewdataService {
  public currentView;
  public allData;
  public books='https://anapioficeandfire.com/api/books';
  public houses='https://anapioficeandfire.com/api/houses';
  public characters='https://anapioficeandfire.com/api/characters';

  constructor(private _http:HttpClient) { 
    console.log("service constructor is called");
  }

  //ExceptionHandler
  private handleError(err:HttpErrorResponse){
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

 public getBooks():any{
   let books=this._http.get(this.books);
   console.log(books); 
   return books; 
 }
 public getHouses():any{
     let houses=this._http.get(this.houses);
     return houses;
 }
 public getCharacters():any{
    let characters=this._http.get(this.characters);
    return characters;
 }
 public getAllData():any {
  return forkJoin(this._http.get(this.books), this._http.get(this.characters),
  this._http.get(this.houses));
 }

 //method to get details of single card
 public getSingleViewInformation(url):any{
   let details=this._http.get(url);
   console.log(details+"Details");
   return details;
 }
}
