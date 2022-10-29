import { TranslateConfigService } from './../../services/translate-config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {



  constructor(private translateConfigService: TranslateConfigService) {}

  ngOnInit(): void {

  }



  changeLanguage(type: string) {
    this.translateConfigService.changeLanguage(type);
  }
}
