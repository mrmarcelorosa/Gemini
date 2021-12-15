import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListargrupoComponent } from './listargrupo.component';

describe('ListargrupoComponent', () => {
  let component: ListargrupoComponent;
  let fixture: ComponentFixture<ListargrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListargrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListargrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
