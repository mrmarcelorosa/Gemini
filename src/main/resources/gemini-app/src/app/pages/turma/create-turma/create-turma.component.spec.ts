import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTurmaComponent } from './create-turma.component';

describe('CreateTurmaComponent', () => {
  let component: CreateTurmaComponent;
  let fixture: ComponentFixture<CreateTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
