import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GetMockService } from './service/get-mock.service';
import { CatalogBrowsingComponent } from './catalog-browsing/catalog-browsing.component';
import { ProductBrowsingComponent } from './product-browsing/product-browsing.component';
import {  router } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    CatalogBrowsingComponent,
    ProductBrowsingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    router
  ],
  providers: [GetMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
