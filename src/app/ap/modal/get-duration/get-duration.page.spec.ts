import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetDurationPage } from './get-duration.page';

describe('GetDurationPage', () => {
  let component: GetDurationPage;
  let fixture: ComponentFixture<GetDurationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDurationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetDurationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
