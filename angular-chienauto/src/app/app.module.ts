import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './component/search/search.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductCategoryMenuComponent } from './component/product-category-menu/product-category-menu.component';
import { FavoriteDetailComponent } from './component/favorite-detail/favorite-detail.component';




const routes: Routes = [
    {path: 'favorite-details', component: FavoriteDetailComponent},
    {path: 'products/:id', component: ProductDetailComponent},
    {path: 'search/:keyword', component: ProductListComponent},
    {path: 'productCategory/:id', component: ProductListComponent},
    {path: 'productCategory/', component: ProductListComponent},
    {path: 'products', component: ProductListComponent},
    {path: '', redirectTo: '/products', pathMatch: 'full'},
    {path: '**', redirectTo: '/products', pathMatch: 'full'},

]


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ProductDetailComponent,
    ProductCategoryMenuComponent,
    FavoriteDetailComponent,
    

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
   

  ],
  providers: [
    provideClientHydration(),
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
