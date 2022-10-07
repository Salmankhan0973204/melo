import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUSComponent } from './content-us.component';

describe('ContentUSComponent', () => {
  let component: ContentUSComponent;
  let fixture: ComponentFixture<ContentUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentUSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
