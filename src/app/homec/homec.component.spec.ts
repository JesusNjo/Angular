import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecComponent } from './homec.component';

describe('HomecComponent', () => {
  let component: HomecComponent;
  let fixture: ComponentFixture<HomecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomecComponent]
    });
    fixture = TestBed.createComponent(HomecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
