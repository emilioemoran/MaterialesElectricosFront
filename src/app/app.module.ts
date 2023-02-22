import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './features/nav-bar/nav-bar.component';
import { HeaderComponent } from './features/header/header.component';
import { ContactComponent } from './features/contact/contact.component';
import { StoreComponent } from './features/store/store.component';

import { HomeComponent } from './features/home/home.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductService } from './core/services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    ContactComponent,
    StoreComponent,
    ProductComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
