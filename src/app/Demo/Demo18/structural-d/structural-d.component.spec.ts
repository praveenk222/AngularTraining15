import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDComponent } from './structural-d.component';

describe('StructuralDComponent', () => {
  let component: StructuralDComponent;
  let fixture: ComponentFixture<StructuralDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
