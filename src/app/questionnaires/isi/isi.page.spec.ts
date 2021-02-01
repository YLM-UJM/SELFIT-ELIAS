import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IsiPage } from './isi.page';

describe('IsiPage', () => {
  let component: IsiPage;
  let fixture: ComponentFixture<IsiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IsiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
