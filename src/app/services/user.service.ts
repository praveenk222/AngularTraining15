import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl:string="https://jsonplaceholder.typicode.com/users"
  constructor(private http:HttpClient) { }

  getUser(){
  return  this.http.get(this.baseUrl);
  }
 
}
