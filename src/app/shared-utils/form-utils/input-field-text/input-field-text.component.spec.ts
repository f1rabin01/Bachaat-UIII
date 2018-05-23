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
    const textField = component.formControlName;
    expect(textField.valid).toBeFalsy();
    expect(textField.errors['required']).toBeTruthy();
  });
  it('should not give field required error when input field value is not empty', () => {
    const textField = component.formGroup.controls['formControlName'];
    textField.setValue('Rab');
    expect(textField.valid).toBeTruthy();
  });
  it('should give field min length error when input field value is less than min length', () => {
    const textField = component.formGroup.controls['formControlName'];
    // component.minLength = 3; //Not being able to pass minLength
    textField.setValue('Ra');
    expect(component.formGroup.valid).toBeFalsy();
    expect(textField.errors['minlength']).toBeDefined();
  });
  it('should give pattern error when input field value contains number', () => {
    const textField = component.formGroup.controls['formControlName'];
    textField.setValue('123');
    expect(component.formGroup.valid).toBeFalsy();
    expect(textField.errors['pattern']).toBeTruthy();
  });
});
