import { Component, OnInit } from '@angular/core';
import {TodoService} from '../shared/todo.service';
import { TodoAjaxService } from '../shared/todo-ajax.service';
import { Todo } from '../shared/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
tableau:Todo[];

newTodo:string;


constructor(private todoService:TodoAjaxService){

}

ngOnInit() {
this.todoService.getAllTodo().then((todos) => this.tableau = todos);
}

ajoutTodo(){
  this.todoService.addTodo({message:this.newTodo}).then((todo) => this.tableau.push(todo));
// this.todoService.ajout(this.newTodo);
}

supprimerTodo(index:number){
  this.todoService.removeTodo({id:index, message:'rien'}).then(() => this.tableau = this.tableau.filter((todo) => todo.id !=index) );
}


}
