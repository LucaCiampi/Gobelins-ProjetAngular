import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLikeButtonComponent } from './image-like-button.component';

describe('ImageLikeButtonComponent', () => {
  let component: ImageLikeButtonComponent;
  let fixture: ComponentFixture<ImageLikeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageLikeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLikeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
