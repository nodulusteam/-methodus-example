import { Injectable, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable()
export class LanguageService {
  constructor(public translate: TranslateService) {

    this.languages = [];
    this.languages.push({ key: 'en', lcid: 1025, name: 'English', dir: 'ltr' });
    this.languages.push({ key: 'he', lcid: 1037, name: 'עברית', dir: 'rtl' });
    this.languages.push({ key: 'de', lcid: 1037, name: 'Dutche', dir: 'ltr' });

    const lngstr = localStorage.getItem('lng');
    if (lngstr) {
      this.language = JSON.parse(lngstr);
    } else {
      this.language = this.languages[0];
    }

    document.getElementsByTagName('body')[0].className = this.language.dir;
    this.cssUrl = `/assets/i18n/${this.language.dir}.css?k=${Math.random()}`;
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.language.key);
  }

  cssUrl: string;
  languages: any[];
  language: any;
  setLanguage(language: any) {
    this.language = language;
    localStorage.setItem('lng', JSON.stringify(language));
    this.translate.use(language.key);
    document.getElementsByTagName('body')[0].className = language.dir;
    this.cssUrl = `/assets/i18n/${language.dir}.css?k=${Math.random()}`;
  }

}
