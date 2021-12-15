import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTurmaComponent } from './view-turma.component';

describe('ViewTurmaComponent', () => {
  let component: ViewTurmaComponent;
  let fixture: ComponentFixture<ViewTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
