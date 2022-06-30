import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeviewComponent } from './shoeview.component';

describe('ShoeviewComponent', () => {
  let component: ShoeviewComponent;
  let fixture: ComponentFixture<ShoeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
