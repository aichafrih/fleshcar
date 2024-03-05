import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email!: string;
  message!: string;

  constructor(private authService: SharedService, private router: Router,) {}
  ngOnInit(): void {
    
  }

  onSubmit() {
    this.authService.requestPasswordReset(this.email)
      .subscribe(
        () => {
          this.message = 'Reset password email has been sent';
          this.router.navigate(['/code-de-confirmation']);
        },
        error => {
          console.error(error);
          this.message = 'An error occurred. Please try again later.';
        }
      );
  }
}