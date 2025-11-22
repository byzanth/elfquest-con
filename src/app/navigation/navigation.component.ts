import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    standalone: false
})
export class NavigationComponent {

  public languageInUse: string | null = null;
  private translate = inject(TranslateService);

  public constructor() {
    this.languageInUse = this.translate.currentLang;
  }

  public useLanguage(language: string) {
    this.translate.use(language);
    this.languageInUse = language;
  }

}
