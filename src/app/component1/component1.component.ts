import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  universityName: string = 'Chuarusat University';
  universityLocation: string = 'Gujarat , India';

  number1: number = 5;
  number2: number = 1;

  result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.result = this.number1 + this.number2;
  }

  clearValue() {
    this.result = 0;
  }

}

