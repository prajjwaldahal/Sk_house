import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcontComponent } from './dashcont.component';

describe('DashcontComponent', () => {
  let component: DashcontComponent;
  let fixture: ComponentFixture<DashcontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashcontComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashcontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
