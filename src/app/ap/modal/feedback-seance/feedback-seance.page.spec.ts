import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedbackSeancePage } from './feedback-seance.page';

describe('FeedbackSeancePage', () => {
  let component: FeedbackSeancePage;
  let fixture: ComponentFixture<FeedbackSeancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackSeancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedbackSeancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
