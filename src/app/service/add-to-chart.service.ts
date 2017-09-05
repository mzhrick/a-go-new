import { Injectable } from '@angular/core';
import { OrderProductModel } from './../mock_product/order_product.model';

@Injectable()
export class AddToChartService {

  orderedProduct=[];


  constructor() { }

  chart(product:OrderProductModel):void{
    this.orderedProduct.push(product);
    console.log(this.orderedProduct);
  }
}
