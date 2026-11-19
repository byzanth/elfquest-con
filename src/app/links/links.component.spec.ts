import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { of, Subject } from 'rxjs';

import { LinksComponent } from './links.component';

describe('LinksComponent', () => {
  let component: LinksComponent;
  let fixture: ComponentFixture<LinksComponent>;

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
      imports: [LinksComponent, TranslateModule.forRoot()],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
