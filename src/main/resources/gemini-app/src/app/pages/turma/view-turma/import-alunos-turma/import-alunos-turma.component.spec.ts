import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportAlunosTurmaComponent } from './import-alunos-turma.component';

describe('ImportAlunosTurmaComponent', () => {
  let component: ImportAlunosTurmaComponent;
  let fixture: ComponentFixture<ImportAlunosTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportAlunosTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportAlunosTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
