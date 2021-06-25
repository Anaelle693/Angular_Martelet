import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VersionService } from '../../services/version.service';
import * as dayjs from 'dayjs';
import { ProverbeService } from '../../services/proverbe.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public version$!: BehaviorSubject<number>;
  public proverbe!: string;

  constructor(private vs: VersionService, private provb: ProverbeService) {
    this.version$ = this.vs.version$;
  }

  ngOnInit(): void {
    this.proverbe = this.provb.afficher();
  }

  public date = dayjs().format("YYYY");


}
