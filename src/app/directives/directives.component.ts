import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  nos = [1, 2, 'jai', 3, 4, 5, 'raj', 6, 7, 8, 9, 10];
  constructor() { }

  ngOnInit(): void {
  }

}
