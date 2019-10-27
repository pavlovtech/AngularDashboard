import { TestBed } from '@angular/core/testing';
import { CardResizeService } from './card-resize.service';

describe('ResizeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardResizeService = TestBed.get(CardResizeService);
    expect(service).toBeTruthy();
  });
});
