import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionComponent } from './fusion.component';

describe('FusionComponent', () => {
  let component: FusionComponent;
  let fixture: ComponentFixture<FusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
