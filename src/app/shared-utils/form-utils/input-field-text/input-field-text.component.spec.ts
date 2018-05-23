import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('should intilize component', () => {
    expect(component).toBeTruthy();
  });
  it('should give field required error when input field value is empty', () => {
    const lastName = component.formControlName;
    const errors = lastName.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  xit('should not give field required error when input field value is not empty', () => {
    const lastName = component.formControlName;
    lastName.setValue('Rab');
    fixture.detectChanges();
    const errors = lastName.errors || {};
    expect(errors['required']).toBeFalsy();
  });
  it('should give field min length error when input field value is less than min length', () => {
    const lastName = component.formControlName;
    // component.minLength = 5;
    lastName.setValue('Ra');
    fixture.detectChanges();
    const errors = lastName.errors;
    console.log(errors);
    expect(errors['minlength']).toBeTruthy();
    // expect(errors['minlength']).toEqual(3);
  });
});
