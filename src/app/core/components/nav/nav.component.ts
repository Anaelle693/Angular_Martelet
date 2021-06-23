import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // on injecte les services dans le conctructeur avant utilisation
  constructor(private versionService: VersionService) { }

  ngOnInit(): void {
  }

  public increment(): void{
    this.versionService.incrementVersion();
  }
}
