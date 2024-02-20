import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiguestComponent } from './digiguest.component';

describe('DigiguestComponent', () => {
  let component: DigiguestComponent;
  let fixture: ComponentFixture<DigiguestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigiguestComponent]
    });
    fixture = TestBed.createComponent(DigiguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
