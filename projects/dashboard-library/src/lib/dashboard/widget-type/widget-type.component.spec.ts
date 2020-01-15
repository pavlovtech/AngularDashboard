import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTypeComponent } from './widget-type.component';

describe('WidgetTypeComponent', () => {
  let component: WidgetTypeComponent;
  let fixture: ComponentFixture<WidgetTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
