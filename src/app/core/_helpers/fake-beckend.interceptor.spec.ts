import { TestBed } from '@angular/core/testing';

import { FakeBeckendInterceptor } from './fake-beckend.interceptor';

describe('FakeBeckendInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FakeBeckendInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FakeBeckendInterceptor = TestBed.inject(FakeBeckendInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
