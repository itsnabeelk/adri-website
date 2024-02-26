import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePriceComponent } from './translate-price.component';

describe('TranslatePriceComponent', () => {
  let component: TranslatePriceComponent;
  let fixture: ComponentFixture<TranslatePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranslatePriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranslatePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
