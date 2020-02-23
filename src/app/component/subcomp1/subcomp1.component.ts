import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subcomp1',
  templateUrl: './subcomp1.component.html',
  styleUrls: ['./subcomp1.component.css']
})
export class Subcomp1Component implements OnInit {

  @Input() param: string;
  constructor() { }

  ngOnInit(): void {
  }

  onHandle(event:any){
    console.log(event);
  }

  display(event:any){
    console.log(event);
  }

  changeMe(){
    this.param = "i am changed param";
  }
}
