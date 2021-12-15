import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { createGrupoComponent } from './creategrupo.component';

describe('createGrupoComponent', () => {
  let component: createGrupoComponent;
  let fixture: ComponentFixture<createGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ createGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(createGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
