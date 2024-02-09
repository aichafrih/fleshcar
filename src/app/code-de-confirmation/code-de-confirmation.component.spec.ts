import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeDeConfirmationComponent } from './code-de-confirmation.component';

describe('CodeDeConfirmationComponent', () => {
  let component: CodeDeConfirmationComponent;
  let fixture: ComponentFixture<CodeDeConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeDeConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeDeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
