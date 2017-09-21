import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.service';
import { TodoAjaxService } from '../shared/todo-ajax.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
tableau:object[];

newTodo:string;

constructor(private todoService:TodoAjaxService){

}

ngOnInit() {
this.todoService.getAllTodo().then((todos) => this.tableau = <object[]>todos);
}

ajoutTodo(){
// this.todoService.ajout(this.newTodo);
}

supprimerTodo(index:number){
  // this.todoService.supprimer(index);
}


}
