import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicdetailsComponent } from './topicdetails.component';

describe('TopicdetailsComponent', () => {
  let component: TopicdetailsComponent;
  let fixture: ComponentFixture<TopicdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
