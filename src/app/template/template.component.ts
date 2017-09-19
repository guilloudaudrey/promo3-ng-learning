import { Component } from '@angular/core';

@Component({
selector: 'app-template',
templateUrl: './template.component.html',

})
export class TemplateComponent {
    title = 'app';
    
    
      methode(){
        this.title = 'autre chose';
      }
    
      
    }
    