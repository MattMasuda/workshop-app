import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseFilterComponent } from './release-filter.component';

describe('ReleaseFilterComponent', () => {
  let component: ReleaseFilterComponent;
  let fixture: ComponentFixture<ReleaseFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
