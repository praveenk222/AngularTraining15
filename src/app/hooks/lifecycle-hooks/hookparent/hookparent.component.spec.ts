import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookparentComponent } from './hookparent.component';

describe('HookparentComponent', () => {
  let component: HookparentComponent;
  let fixture: ComponentFixture<HookparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
