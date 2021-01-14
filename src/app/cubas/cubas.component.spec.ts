import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubasComponent } from './cubas.component';

describe('CubasComponent', () => {
  let component: CubasComponent;
  let fixture: ComponentFixture<CubasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
