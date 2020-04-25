import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private translate: TranslateService, private languageService: LanguageService) { }

  lang;

  useLanguage(language: string) {
    this.lang = language;
    this.translate.use(this.lang);
    this.languageService.switchLanguage(this.lang);
  }

  ngOnInit() {
    this.languageService.getLanguage().subscribe(lang => {
      this.lang = lang;
    })
  }

}
