import { Component } from '@angular/core';
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
  checked:boolean=true
  remember_me:string;
  constructor(private fb: UntypedFormBuilder,private auth:AuthService,private router:Router,private userStore:UserStoreService) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      this.auth.login(this.validateForm.value).subscribe({
        next:(res)=>{
          this.remember_me = this.validateForm.value["remember"]
          debugger
          if(this.validateForm.value["remember"]==true){
            this.auth.storeTokenAndRememberMe(res.token,this.remember_me)
          }
          else{
            this.auth.storeTokenInMemory(res.token)
          }

          alert(res.message)
          let tokenPayload = this.auth.decodedToken();
          this.userStore.setFullNameForStore(tokenPayload.name)
          this.userStore.setRoleForStore(tokenPayload.role)
          this.router.navigate(['home'])
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
    if(this.auth.isLoggedIn()){
      this.router.navigate(['home'])
    }
    this.validateForm = this.fb.group({
      Email: [null, [Validators.required]],
      Password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
