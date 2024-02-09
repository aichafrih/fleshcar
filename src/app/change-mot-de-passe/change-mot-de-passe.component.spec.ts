import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMotDePasseComponent } from './change-mot-de-passe.component';

describe('ChangeMotDePasseComponent', () => {
  let component: ChangeMotDePasseComponent;
  let fixture: ComponentFixture<ChangeMotDePasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMotDePasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeMotDePasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
