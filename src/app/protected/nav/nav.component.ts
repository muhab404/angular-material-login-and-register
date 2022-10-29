import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isAdmin : Boolean =false ;
  constructor(private translateConfigService: TranslateConfigService) {
  }

  ngOnInit(): void {
    let user = sessionStorage.getItem('user');
    if(user == 'admin@gmail'){
      this.isAdmin=true
    }
  }

  changeLanguage(type: string) {
    this.translateConfigService.changeLanguage(type);
  }

}
