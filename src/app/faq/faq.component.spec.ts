import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { of, Subject } from 'rxjs';

import { FaqComponent } from './faq.component';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

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
      imports: [FaqComponent, TranslateModule.forRoot()],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
