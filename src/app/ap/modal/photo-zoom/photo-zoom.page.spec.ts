import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoZoomPage } from './photo-zoom.page';

describe('PhotoZoomPage', () => {
  let component: PhotoZoomPage;
  let fixture: ComponentFixture<PhotoZoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoZoomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoZoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
