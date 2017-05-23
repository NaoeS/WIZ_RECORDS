import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordNewComponent } from './record-new.component';

describe('RecordNewComponent', () => {
  let component: RecordNewComponent;
  let fixture: ComponentFixture<RecordNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
