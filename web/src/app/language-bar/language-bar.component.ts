import { Component, OnInit, Sanitizer } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-language-bar',
  templateUrl: './language-bar.component.html',
  styleUrls: ['./language-bar.component.css']
})
export class LanguageBarComponent implements OnInit {
  languages: any[];
  selectedLanguage: any;
  cssUrl: string;
  constructor(public translate: TranslateService, public languageService: LanguageService, public sanitizer: Sanitizer) {
  }

  ngOnInit() {
    this.languages = this.languageService.languages;
  }

  selectLanguage() {
    this.languageService.setLanguage(this.selectedLanguage);
  
  }
}
