import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaopageComponent } from './questaopage.component';

describe('QuestaopageComponent', () => {
  let component: QuestaopageComponent;
  let fixture: ComponentFixture<QuestaopageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestaopageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestaopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
