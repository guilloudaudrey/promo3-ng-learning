import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent implements OnInit {

  tableau:string[] = ["aaa","bbb","ccc","ddd"];

  constructor() { }

  ngOnInit() {
  }

}
