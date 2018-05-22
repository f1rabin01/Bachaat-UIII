import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldEmailComponent } from './input-field-email.component';

describe('InputFieldEmailComponent', () => {
  let component: InputFieldEmailComponent;
  let fixture: ComponentFixture<InputFieldEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
