import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoModalComponent } from './questao-modal.component';

describe('QuestaoModalComponent', () => {
  let component: QuestaoModalComponent;
  let fixture: ComponentFixture<QuestaoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestaoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestaoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
