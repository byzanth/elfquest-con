import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { of, Subject } from 'rxjs';
import { CreditsComponent } from '../credits/credits.component';
import { FaqComponent } from '../faq/faq.component';
import { LocationComponent } from '../location/location.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { StartComponent } from '../start/start.component';

import { HomepageComponent } from './homepage.component';
import { LinksComponent } from '../links/links.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  class TranslateServiceMock {
    public onLangChange = new Subject();
    public onTranslationChange = new Subject();
    public onDefaultLanguageChange = new Subject();
    public addLangs = () => { return true; };
    public setDefaultLang = () => { return true; };
    public use = () => { return true; };
    public currentLang = 'en';
    public get = (key: string) => of(key);
    public instant = (key: string) => key;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomepageComponent,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
