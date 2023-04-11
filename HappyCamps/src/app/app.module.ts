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
import { UserOutline, LockOutline, MailOutline, InstagramOutline, PhoneOutline, CalendarOutline, HistoryOutline } from '@ant-design/icons-angular/icons';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { HomeComponent } from './home/home.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './routing/routing.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { InfoCardComponent } from './info-card/info-card.component';

registerLocaleData(en);

const icons: IconDefinition[] =
  [UserOutline, LockOutline, MailOutline,
    InstagramOutline, PhoneOutline, CalendarOutline,
    HistoryOutline];

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    NavigationBarComponent,
    InfoCardComponent,
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
    NzMenuModule,
    NzToolTipModule,
    NzCardModule,
    NzSelectModule,
    NzDatePickerModule
  ],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
