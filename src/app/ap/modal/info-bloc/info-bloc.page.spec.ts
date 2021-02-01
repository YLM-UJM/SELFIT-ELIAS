import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoBlocPage } from './info-bloc.page';

describe('InfoBlocPage', () => {
  let component: InfoBlocPage;
  let fixture: ComponentFixture<InfoBlocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBlocPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoBlocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
