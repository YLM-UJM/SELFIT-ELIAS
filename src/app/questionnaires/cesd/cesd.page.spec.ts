import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CesdPage } from './cesd.page';

describe('CesdPage', () => {
  let component: CesdPage;
  let fixture: ComponentFixture<CesdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CesdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CesdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
