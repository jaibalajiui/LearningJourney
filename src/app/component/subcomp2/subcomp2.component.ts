import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-subcomp2',
  templateUrl: './subcomp2.component.html',
  styleUrls: ['./subcomp2.component.css']
})
export class Subcomp2Component implements OnInit {

  @Output() out: EventEmitter<string> = new EventEmitter();
  constructor() { }

  hello(){
    this.out.emit('hi from subcomponent');
  }
  ngOnInit(): void {
  }

}
