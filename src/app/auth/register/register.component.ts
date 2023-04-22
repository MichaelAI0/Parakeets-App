import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    streetAddress: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}
  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      const user = {
        first_name: this.form.get('firstName')?.value,
        last_name: this.form.get('lastName')?.value,
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        confirmPassword: this.form.get('confirmPassword')?.value,
        country: this.form.get('country')?.value,
        street_address: this.form.get('streetAddress')?.value,
        city: this.form.get('city')?.value,
        state: this.form.get('state')?.value,
        zipcode: this.form.get('zipCode')?.value,
      };

      console.log(user);

      this.authService.register(user);
    }
  }
}
