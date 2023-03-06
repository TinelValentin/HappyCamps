import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder,private auth:AuthService,private router:Router,private userStore:UserStoreService) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      this.auth.login(this.validateForm.value).subscribe({
        next:(res)=>{
          this.auth.storeToken(res.token)
          alert(res.message)
          let tokenPayload = this.auth.decodedToken();
          this.userStore.setFullNameForStore(tokenPayload.name)
          this.userStore.setRoleForStore(tokenPayload.role)
          console.log(res)
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

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      Email: [null, [Validators.required]],
      Password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
