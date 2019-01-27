import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { SearchPipe} from './pipe/search.pipe';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatInput, MatInputModule} from '@angular/material';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { CustomsDirective, OnlyNumber } from './directive/customs.directive';
import { OnlyAlphabtes } from "./directive/customs.directive";
import { CustomModule } from './custom/custom.module';
import { Custom1Module } from './custom1/custom1.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    PageNotFoundComponent,
    FirstComponent,
    SearchPipe,
    ErrorDisplayComponent,
    CustomsDirective,
    OnlyAlphabtes,
    OnlyNumber
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxSpinnerModule,
    CustomModule,
    Custom1Module,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
