import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Roles } from '../Models/roles';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  validateForm: UntypedFormGroup;
  public rolesValues = Object.values(Roles)

  submitForm(): void {
    if (this.validateForm.valid) {
      this.userservice.registerUser(this.validateForm.value).subscribe({
        next:(res)=>{
          alert(res.message)
          this.router.navigate(['login'])
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

  constructor(private formBuilder: UntypedFormBuilder,private userservice:UserService,private router:Router) {}

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.maxLength(30)]],
      lastName: [null, [Validators.required, Validators.maxLength(30)]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phoneNumber: [null, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10), Validators.minLength(10)]],
      instagram: [null, [Validators.required, Validators.pattern("^@.*$")]],
      city: [null, [Validators.required, Validators.maxLength(30)]],
      birthDate:[null,[Validators.required]],
      role:[null,[Validators.required]]
    });
  }
}