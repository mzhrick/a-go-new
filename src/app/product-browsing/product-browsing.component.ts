import { Component, OnInit } from '@angular/core';
import { ProductModel } from './../mock_product/mock_product.model';
import { GetMockService } from "../service/get-mock.service";
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-product-browsing',
  templateUrl: './product-browsing.component.html',
  styleUrls: ['./product-browsing.component.css']
})
export class ProductBrowsingComponent implements OnInit {

  quantity : number= 1 ;
  selectedProduct :ProductModel;
  // products:ProductModel[];

  constructor(
    private getMock:GetMockService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.getMock.getProduct(+params.get('id')))
      .subscribe((select:ProductModel) => {
        return this.selectedProduct = select;
      });
  }

  addToChart() : void {

  }



}
