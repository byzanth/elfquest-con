import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    imports: [TranslatePipe]
})
export class NavigationComponent {

  private readonly translate = inject(TranslateService);
  public languageInUse = this.translate.currentLang;

  public useLanguage(language: string) {
    this.translate.use(language);
  }

}
