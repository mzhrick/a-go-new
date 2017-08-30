import { Component,OnInit } from '@angular/core';
import { GetMockService } from "./service/get-mock.service";
import {ProductModel} from "./mock_product/mock_product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  logIn : boolean = false;
  products : ProductModel[];
  selectedProduct : ProductModel;


  constructor(private getMock : GetMockService){}

  ngOnInit(){
    this.products = this.getMock.getData();
  }


  showDetails(product:ProductModel):void{
    //selected product id to pass to next page
    this.selectedProduct = product;
    console.log(this.selectedProduct);
  }
}
