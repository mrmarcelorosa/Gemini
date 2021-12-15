import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioModalComponent } from './questionario-modal.component';

describe('QuestionarioModalComponent', () => {
  let component: QuestionarioModalComponent;
  let fixture: ComponentFixture<QuestionarioModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionarioModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
