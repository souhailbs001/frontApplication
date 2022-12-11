import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandeCreditComponent } from './liste-demande-credit.component';

describe('ListeDemandeCreditComponent', () => {
  let component: ListeDemandeCreditComponent;
  let fixture: ComponentFixture<ListeDemandeCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDemandeCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDemandeCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
