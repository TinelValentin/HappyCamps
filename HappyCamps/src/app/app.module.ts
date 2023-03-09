import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HttpClientModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline, LockOutline, MailOutline, InstagramOutline, PhoneOutline } from '@ant-design/icons-angular/icons';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { HomeComponent } from './home/home.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import {HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './routing/routing.module';

const icons: IconDefinition[] = [UserOutline, LockOutline, MailOutline, InstagramOutline, PhoneOutline];

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    BrowserAnimationsModule,
    NzIconModule.forRoot(icons),
    NzCheckboxModule,
    HttpClientModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
