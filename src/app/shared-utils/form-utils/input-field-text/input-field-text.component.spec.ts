import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { User } from '../../../user';
import {FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { InputFieldTextComponent } from './input-field-text.component';

describe('InputFieldTextComponent', () => {
  let component: InputFieldTextComponent;
  let fixture: ComponentFixture<InputFieldTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldTextComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldTextComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('input-field-text invalid when empty', () => {
    let lastName = component.fcn;
    let errors = lastName.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('input-field-text validity', () => {
    let lastName = component.fcn;
    component.minLength = 3;
    fixture.detectChanges();
    // let minlength = component.fcn.minLength;
    lastName.setValue('Ra');
    let errors = lastName.errors || {};
    expect(errors['required']).toBeFalsy();
    // expect(errors['minlength']).toBeFalsy();
  });
});
