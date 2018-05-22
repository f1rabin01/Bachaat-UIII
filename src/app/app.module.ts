import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFieldEmailComponent } from './shared-utils/form-utils/input-field-email/input-field-email.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldEmailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
