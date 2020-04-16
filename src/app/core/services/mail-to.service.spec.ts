import { TestBed } from '@angular/core/testing';

import { MailToService } from './mail-to.service';

describe('MailToService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailToService = TestBed.get(MailToService);
    expect(service).toBeTruthy();
  });
});
