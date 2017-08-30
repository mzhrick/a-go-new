import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GetMockService } from './service/get-mock.service';
import { CatalogBrowsingComponent } from './catalog-browsing/catalog-browsing.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogBrowsingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GetMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
