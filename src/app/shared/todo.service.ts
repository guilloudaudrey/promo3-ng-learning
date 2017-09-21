import { Injectable } from "@angular/core";

@Injectable()

export class TodoService {
    tableau:string[] = ['a', 'b', 'c'];
    
    getTodos():string[] {
        return this.tableau;
    }
    
    ajout(todo:string){
    this.tableau.push(todo);
    }
    
    supprimer(index:number){
      this.tableau.splice(index, 1);
    }
}