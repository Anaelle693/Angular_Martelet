import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-sign-in',
  templateUrl: './page-sign-in.component.html',
  styleUrls: ['./page-sign-in.component.scss']
})
export class PageSignInComponent implements OnInit {
  public titre = 'Accueil';
  public nb: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  changeTitre(){
    this.nb++;
    this.titre=`J'ai changé de titre ${this.nb} fois `;
  }

}
