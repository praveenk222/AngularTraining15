import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpdataService {
baseUrl:string='https://jsonplaceholder.typicode.com/todos/'
  constructor(private httpclint:HttpClient) {

  }
  getAllTodos(){
    return this.httpclint.get(this.baseUrl);
  }
  getTodosById(id:number){
    return this.httpclint.get(this.baseUrl+id)
  }
  getTodosByIds(id:number){
    return this.httpclint.get(this.baseUrl+id)
  }
}
