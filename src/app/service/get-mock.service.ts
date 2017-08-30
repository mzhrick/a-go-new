import { Injectable } from '@angular/core';
import { ProductModel } from './../mock_product/mock_product.model';
import { Products } from './../mock_product/mock_product';

@Injectable()
export class GetMockService {

  data : ProductModel[];

  getData(){
    return this.data = Products;
  }

}
