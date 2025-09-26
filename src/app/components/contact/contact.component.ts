import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // If you applied earlier fix for @ in templates:
  email = 'contact.m.senanayake@gmail.com';

  // declare the property but don't initialize here
  contactForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    // Initialize using the injected FormBuilder (fb is now available)
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.formSubmitted = true;
    // Replace with actual submission logic
    alert('Thank you for your message! I will get back to you soon.');
    this.contactForm.reset();
  }
}
