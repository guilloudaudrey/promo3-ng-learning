import { Injectable } from "@angular/core";

@Injectable()

export class CompteurService {
compte:number = 0;


incrementer(){
    this.compte++;
}

decrementer(){
    this.compte--;
}




}


