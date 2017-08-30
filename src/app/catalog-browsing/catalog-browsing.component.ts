import { Component, OnInit } from '@angular/core';
import { GetMockService } from "./../service/get-mock.service";
import {ProductModel} from "./../mock_product/mock_product.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-browsing',
  templateUrl: './catalog-browsing.component.html',
  styleUrls: ['./catalog-browsing.component.css']
})
export class CatalogBrowsingComponent implements OnInit {

  products : ProductModel[];
  selectedProduct : ProductModel;


  constructor(
    private getMock : GetMockService,
    private router:Router
){}

  ngOnInit(){
    this.getMock.getData().then((data)=>this.products=data);
  }


  showDetails(product:ProductModel):void{
    //selected product id to pass to next page
    this.selectedProduct = product;
    // console.log(this.selectedProduct);
    this.router.navigate(['/product',this.selectedProduct.id]);
  }
}
