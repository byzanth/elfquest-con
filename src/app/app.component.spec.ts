import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule
      ],
      providers: [
        provideTranslateService({ fallbackLang: 'de' }),
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('initializes German with English and German available', () => {
    TestBed.createComponent(AppComponent);
    const translate = TestBed.inject(TranslateService);
    expect(translate.getCurrentLang()).toBe('de');
    expect(translate.getFallbackLang()).toBe('de');
    expect(translate.getLangs()).toContain('en');
    expect(translate.getLangs()).toContain('de');
  });

});

