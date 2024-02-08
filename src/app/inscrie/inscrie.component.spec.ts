import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrieComponent } from './inscrie.component';

describe('InscrieComponent', () => {
  let component: InscrieComponent;
  let fixture: ComponentFixture<InscrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscrieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
