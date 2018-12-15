import { NgModule, ModuleWithProviders } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DictionaryService } from './services/language/dictionary.service';
import { FileDropModule } from 'ngx-file-drop';
@NgModule({
  imports: [TranslateModule.forChild(), FileDropModule],
  declarations: [],
  providers: [TranslateService, DictionaryService],
  exports: [TranslateModule, FileDropModule],
})
export class SharedModule {
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('he');


  }

  static forRoot(loader): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
