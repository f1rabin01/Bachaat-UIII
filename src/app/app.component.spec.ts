import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InputFieldTextComponent} from './shared-utils/form-utils/input-field-text/input-field-text.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        InputFieldTextComponent
      ],
      imports: [
        // BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should display Input-Field-Text', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const input_field_text = compiled.querySelectorAll('app-input-field-text');
    expect(input_field_text).toBeTruthy();
    expect(input_field_text.length).toBe(3, 'should display 3 input forms');
  }));
});
