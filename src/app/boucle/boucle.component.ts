import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import {CompteurService} from '../shared/compteur.service'

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css'],

  
})
export class BoucleComponent implements OnInit {

  tableau:string[] = ["aaa","bbb","ccc","ddd"];

  constructor(private compteurService:CompteurService){
    
}

ngOnInit() {
  console.log('boucle' + this.compteurService.compte);
    this.compteurService.incrementer();
    console.log('boucle' + this.compteurService.compte);
}

}
