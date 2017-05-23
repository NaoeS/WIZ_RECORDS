import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckNewComponent } from './deck-new.component';

describe('DeckNewComponent', () => {
  let component: DeckNewComponent;
  let fixture: ComponentFixture<DeckNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
