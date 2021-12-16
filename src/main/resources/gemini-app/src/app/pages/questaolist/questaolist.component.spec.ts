import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaolistComponent } from './questaolist.component';

describe('QuestaolistComponent', () => {
  let component: QuestaolistComponent;
  let fixture: ComponentFixture<QuestaolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestaolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestaolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
