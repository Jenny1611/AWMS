import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CigTableComponent } from './cig-table.component';

describe('CigTableComponent', () => {
  let component: CigTableComponent;
  let fixture: ComponentFixture<CigTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CigTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CigTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
