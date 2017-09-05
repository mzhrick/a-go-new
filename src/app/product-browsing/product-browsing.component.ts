import { Component, OnInit } from '@angular/core';
import { ProductModel } from './../mock_product/mock_product.model';
import { GetMockService } from "../service/get-mock.service";
import { AddToChartService } from '../service/add-to-chart.service';
import { OrderProductModel } from './../mock_product/order_product.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-product-browsing',
  templateUrl: './product-browsing.component.html',
  styleUrls: ['./product-browsing.component.css']
})
export class ProductBrowsingComponent implements OnInit{


  quantity : number= 1 ;
  selectedProduct :ProductModel;
  orderProduct: OrderProductModel;
  // products:ProductModel[];

  constructor(
    private getMock:GetMockService,
    private route: ActivatedRoute,
    private add:AddToChartService
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
    this.orderProduct = {
      id: this.selectedProduct.id,
      name: this.selectedProduct.name,
      price: this.selectedProduct.price,
      quantity: this.quantity
    };
    this.add.chart(this.orderProduct);

    if(confirm('Continue shop?')==true){
      return;
    }else{
      //TODO jump to shopcart
      console.log('hel');
    }

  }




}
