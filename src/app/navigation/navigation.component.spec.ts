import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideTranslateService({
          fallbackLang: 'de',
          loader: provideTranslateHttpLoader({ prefix: './assets/i18n/', failOnError: true })
        })
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loads translations and updates the navigation when switching languages', () => {
    const translate = TestBed.inject(TranslateService);
    const http = TestBed.inject(HttpTestingController);

    translate.use('de');
    http.expectOne('./assets/i18n/de.json').flush({ start: { nav: 'Start' } });
    fixture.detectChanges();

    const buttons: NodeListOf<HTMLButtonElement> = fixture.nativeElement.querySelectorAll('button');
    expect(fixture.nativeElement.querySelector('nav a').textContent).toBe('Start');
    expect(buttons[1].disabled).toBe(true);

    buttons[0].click();
    http.expectOne('./assets/i18n/en.json').flush({ start: { nav: 'Home' } });
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('nav a').textContent).toBe('Home');
    expect(buttons[0].disabled).toBe(true);
    expect(buttons[1].disabled).toBe(false);
    http.verify();
  });
});
