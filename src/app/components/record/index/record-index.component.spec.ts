import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordIndexComponent } from './record-index.component';

describe('RecordIndexComponent', () => {
  let component: RecordIndexComponent;
  let fixture: ComponentFixture<RecordIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
