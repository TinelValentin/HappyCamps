import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  validateForm!: UntypedFormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      debugger;
      console.log('submit', this.validateForm.value);
      this.auth.login(this.validateForm.value).subscribe({
        next:(res)=>{
          alert(res.message)
          this.router.navigate(['home'])
          
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: UntypedFormBuilder,private auth:AuthService,private router:Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      Email: [null, [Validators.required]],
      Password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
