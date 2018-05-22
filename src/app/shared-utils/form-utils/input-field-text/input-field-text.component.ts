import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../user';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

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
  @Input() fg: FormGroup;
  // model: User;
  constructor(private fb: FormBuilder) {
    // this.model = new User(1, 'Rabeendranath123', 'Naga', '', '');
  }
  ngOnInit() {
    this.fg = this.fb.group({
      fcn: ['', [
        Validators.required,
        Validators.minLength(this.minLength),
        Validators.maxLength(this.maxLength)
      ]]
    });
  }
  get fcn() { return this.fg.get('fcn'); }
}
