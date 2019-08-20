import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VtSharedComponent } from './vt-shared.component';

describe('VtSharedComponent', () => {
  let component: VtSharedComponent;
  let fixture: ComponentFixture<VtSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VtSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VtSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
