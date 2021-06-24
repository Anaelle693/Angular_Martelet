import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss']
})
export class TemplateContainerComponent implements OnInit {
  
  // titre qui sera injecté comme attribut du component
  @Input() public title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
