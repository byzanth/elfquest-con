import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss'],
    standalone: true,
    imports: [TranslateModule]
})
export class LinksComponent {
}
