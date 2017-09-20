import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
tableau:string[] = ['a', 'b', 'c'];

newTodo:string;

ajout(){
this.tableau.push(this.newTodo);
}

supprimer(index:number){
  this.tableau.splice(index, 1);
}


afficher(){}

  constructor() { }

  ngOnInit() {
  }

}
