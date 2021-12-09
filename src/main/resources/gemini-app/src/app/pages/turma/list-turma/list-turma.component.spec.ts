import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTurmaComponent } from './list-turma.component';

describe('ListTurmaComponent', () => {
  let component: ListTurmaComponent;
  let fixture: ComponentFixture<ListTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
