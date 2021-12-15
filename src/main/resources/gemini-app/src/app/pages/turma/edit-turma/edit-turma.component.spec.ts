import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTurmaComponent } from './edit-turma.component';

describe('EditTurmaComponent', () => {
  let component: EditTurmaComponent;
  let fixture: ComponentFixture<EditTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
