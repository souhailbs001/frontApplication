import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcceptRdvComponent } from './modal-accept-rdv.component';

describe('ModalAcceptRdvComponent', () => {
  let component: ModalAcceptRdvComponent;
  let fixture: ComponentFixture<ModalAcceptRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcceptRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAcceptRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
