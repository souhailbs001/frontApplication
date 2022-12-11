import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComptesBackOfficeComponent } from './list-comptes-back-office.component';

describe('ListComptesBackOfficeComponent', () => {
  let component: ListComptesBackOfficeComponent;
  let fixture: ComponentFixture<ListComptesBackOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComptesBackOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComptesBackOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
