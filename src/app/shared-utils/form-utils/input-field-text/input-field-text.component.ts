import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-input-field-text',
  templateUrl: './input-field-text.component.html',
  styleUrls: ['./input-field-text.component.css']
})
export class InputFieldTextComponent implements OnInit {
  @Input() labelName: string;
  @Input() optional?: boolean;
  @Input() minLength?: number;
  @Input() maxLength?: number;
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.minLength = isNullOrUndefined(this.minLength) ? 3 : this.minLength;
  }
  ngOnInit() {
   // console.log('===============' + this.minLength);
    this.formGroup = this.fb.group({
      formControlName: ['', [
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength),
        Validators.pattern('^[a-zA-Z]+$')
      ]]
    });
  }
  get formControlName() { return this.formGroup.get('formControlName'); }
}
