import { TestBed } from '@angular/core/testing';

import { Service.CourseService } from './service.course.service';

describe('Service.CourseService', () => {
  let service: Service.CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service.CourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
