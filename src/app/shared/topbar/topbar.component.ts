import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  lang;

  useLanguage(language: string) {
    this.translate.use(language);
    this.lang = language;
  }

  getLanguage() {
    return of(this.lang);
  }

  ngOnInit() {
    console.log(this.translate.langs);
  }

}
