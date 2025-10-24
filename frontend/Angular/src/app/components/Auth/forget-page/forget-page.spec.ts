import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPage } from './forget-page';

describe('ForgetPage', () => {
  let component: ForgetPage;
  let fixture: ComponentFixture<ForgetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForgetPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
