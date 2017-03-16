import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseAddItemComponent } from './release-add-item.component';

describe('ReleaseAddItemComponent', () => {
  let component: ReleaseAddItemComponent;
  let fixture: ComponentFixture<ReleaseAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
