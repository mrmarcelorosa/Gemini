import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderQuestComponent } from './responder-quest.component';

describe('ResponderQuestComponent', () => {
  let component: ResponderQuestComponent;
  let fixture: ComponentFixture<ResponderQuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponderQuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponderQuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
