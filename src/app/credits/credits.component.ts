import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class CreditsComponent {
}
