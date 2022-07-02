import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheretogetComponent } from './wheretoget.component';

describe('WheretogetComponent', () => {
  let component: WheretogetComponent;
  let fixture: ComponentFixture<WheretogetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheretogetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheretogetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
