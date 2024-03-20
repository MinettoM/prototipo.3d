import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2PreviewComponent } from './product2-preview.component';

describe('Product2PreviewComponent', () => {
  let component: Product2PreviewComponent;
  let fixture: ComponentFixture<Product2PreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Product2PreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Product2PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
