import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [
    provideClientHydration(),
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
