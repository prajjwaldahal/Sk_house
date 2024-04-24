import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomupdateComponent } from './romupdate.component';

describe('RomupdateComponent', () => {
  let component: RomupdateComponent;
  let fixture: ComponentFixture<RomupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RomupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
