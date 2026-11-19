import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class LocationComponent {
}
