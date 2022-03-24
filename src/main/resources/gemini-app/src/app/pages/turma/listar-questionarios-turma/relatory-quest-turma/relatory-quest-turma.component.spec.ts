import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoryQuestTurmaComponent } from './relatory-quest-turma.component';

describe('RelatoryQuestTurmaComponent', () => {
  let component: RelatoryQuestTurmaComponent;
  let fixture: ComponentFixture<RelatoryQuestTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatoryQuestTurmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatoryQuestTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
