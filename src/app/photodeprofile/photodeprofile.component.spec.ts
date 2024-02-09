import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotodeprofileComponent } from './photodeprofile.component';

describe('PhotodeprofileComponent', () => {
  let component: PhotodeprofileComponent;
  let fixture: ComponentFixture<PhotodeprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotodeprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotodeprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
