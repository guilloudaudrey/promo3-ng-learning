import { Injectable } from "@angular/core";
import {HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise'

@Injectable()

export class TodoAjaxService{
    private urlApi:string = 'http://localhost:3000/todo';

constructor(private http:HttpClient){}

getAllTodo(){
    return this.http.get(this.urlApi).toPromise();
}

}