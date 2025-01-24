import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  notification = { message: '', type: '' };

  sendEmail() {
    const templateParams = {
      from_name: this.form.name,
      from_email: this.form.email,
      subject: this.form.subject,
      message: this.form.message,
    };

    emailjs
      .send(environment.API_EMAILJS_SERVICE_ID, environment.API_EMAILJS_TEMPLATE_ID, templateParams, environment.API_EMAILJS_USER_ID)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.showNotification('Email sent successfully!', 'success');
          this.form = { name: '', email: '', subject: '', message: '' }; // Reset form
        },
        (error) => {
          console.log('FAILED...', error);
          this.showNotification('Failed to send email. Please try again later.', 'error');
        }
      );
  }

  showNotification(message: string, type: 'success' | 'error') {
    this.notification.message = message;
    this.notification.type = type;

    setTimeout(() => {
      this.notification.message = '';
    }, 5000);
  }
}
