import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslatePipe, TranslateService, TranslateModule } from '@ngx-translate/core';
import { of, Subject } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

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
        AppComponent,
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});

