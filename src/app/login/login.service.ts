import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 //username =new Subject(); //observable
 constructor( private httpclient: HttpClient ) { }
 
 //API Concept
 public getDatafromServer(){
   return this.httpclient.get('http://jsonplaceholder.typicode.com/users').pipe(map((response:any)=>response));

 }
}
