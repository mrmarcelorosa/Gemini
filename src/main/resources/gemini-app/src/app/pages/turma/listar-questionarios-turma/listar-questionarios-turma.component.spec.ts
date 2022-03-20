import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarQuestionariosTurmaComponent } from './listar-questionarios-turma.component';

describe('ListarQuestionariosTurmaComponent', () => {
  let component: ListarQuestionariosTurmaComponent;
  let fixture: ComponentFixture<ListarQuestionariosTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarQuestionariosTurmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarQuestionariosTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
