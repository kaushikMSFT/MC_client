import { AuditService } from './audits/audit/audit.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


import { AuditsComponent } from './audits/audit-list/audits.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuditComponent } from './audits/audit/audit.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditsComponent,
    AuditComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot( 
      [
        {path:'', component: HomeComponent },
        {path:'Audits', component: AuditsComponent},
        {path:'Login', component: LoginComponent},
        {path: 'audits/audit/new', component: AuditComponent}

      ]
     ),
     HttpClientModule
  ],
  providers: [AuditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
