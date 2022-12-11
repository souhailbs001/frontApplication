import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditRdvComponent } from './modal-edit-rdv.component';

describe('ModalEditRdvComponent', () => {
  let component: ModalEditRdvComponent;
  let fixture: ComponentFixture<ModalEditRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
