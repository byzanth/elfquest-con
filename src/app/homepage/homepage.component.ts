import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { StartComponent } from '../start/start.component';
import { LinksComponent } from '../links/links.component';
import { LocationComponent } from '../location/location.component';
import { FaqComponent } from '../faq/faq.component';
import { CreditsComponent } from '../credits/credits.component';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    standalone: true,
    imports: [
      TranslateModule, 
      NavigationComponent, 
      StartComponent, 
      LinksComponent, 
      LocationComponent, 
      FaqComponent, 
      CreditsComponent
    ]
})
export class HomepageComponent {
}
