import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
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

const icons: IconDefinition[] = [UserOutline, LockOutline, MailOutline, InstagramOutline, PhoneOutline];

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    BrowserAnimationsModule,
    NzIconModule.forRoot(icons),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
