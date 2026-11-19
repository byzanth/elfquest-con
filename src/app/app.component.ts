import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, TranslateModule]
})
export class AppComponent {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }
}
