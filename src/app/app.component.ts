import { Component } from '@angular/core';
import {CompteurService} from './shared/compteur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
selectedPage = 'boucle';

constructor(private compteurService:CompteurService){

}

ngOnInit() {
  console.log('app-component' + this.compteurService.compte);
  this.compteurService.incrementer();
  console.log('app-component' + this.compteurService.compte);
}
}


