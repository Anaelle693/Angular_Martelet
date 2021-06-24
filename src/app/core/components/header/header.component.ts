import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //  version$ : le  $ parce que c'est un observable
  // le ! parce que sans valeur au moment de la définition
  public version$!: BehaviorSubject<number>;

  constructor(private vs: VersionService) {
    this.version$ = this.vs.version$;
   }

  ngOnInit(): void {
  }

}
