import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  public name = 'Jai Balaji';
  public age = 12;
  public language = {first:'kannada', sec:'english'}
  constructor() {
    console.log('in compoent routing mod', this.name);
  }

  ngOnInit(): void {
  }


}
