import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionnairesPage } from './questionnaires.page';

describe('QuestionnairesPage', () => {
  let component: QuestionnairesPage;
  let fixture: ComponentFixture<QuestionnairesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnairesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionnairesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
