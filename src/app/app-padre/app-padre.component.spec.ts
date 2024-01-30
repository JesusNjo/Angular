import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPadreComponent } from './app-padre.component';

describe('AppPadreComponent', () => {
  let component: AppPadreComponent;
  let fixture: ComponentFixture<AppPadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPadreComponent]
    });
    fixture = TestBed.createComponent(AppPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
