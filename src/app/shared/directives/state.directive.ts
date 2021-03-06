import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges{

  @Input() appState!: string;
  // binder la propriété 'class' de l'élement "td"
  @HostBinding('class') tdClassName!: string;

  constructor() { }

  ngOnChanges(){
    this.tdClassName = `state-${this.appState.toLocaleLowerCase()}`
  }

}

