import { TestBed } from '@angular/core/testing';

import { SaveQuestionnaireService } from './save-questionnaire.service';

describe('SaveQuestionnaireService', () => {
  let service: SaveQuestionnaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveQuestionnaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
