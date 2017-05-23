import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckIndexComponent } from './deck-index.component';

describe('DeckIndexComponent', () => {
  let component: DeckIndexComponent;
  let fixture: ComponentFixture<DeckIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
