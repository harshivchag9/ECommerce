import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelIndexComponent } from './admin-panel-index.component';

describe('AdminPanelIndexComponent', () => {
  let component: AdminPanelIndexComponent;
  let fixture: ComponentFixture<AdminPanelIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPanelIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
