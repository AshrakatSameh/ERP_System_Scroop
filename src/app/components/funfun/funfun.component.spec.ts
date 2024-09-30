import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunfunComponent } from './funfun.component';

describe('FunfunComponent', () => {
  let component: FunfunComponent;
  let fixture: ComponentFixture<FunfunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunfunComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunfunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
