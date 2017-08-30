import { Injectable } from '@angular/core';
import { ProductModel } from './../mock_product/mock_product.model';
import { Products } from './../mock_product/mock_product';

@Injectable()
export class GetMockService {
  product_id_name_imgUrl : any;
  data :ProductModel[];

  getData(){
    //retrieve data includes id,name and img url from mock file
    // Products.forEach( a => {
    //  this.product_id_name_imgUrl = {
    //     id: a.id,
    //     name: a.name,
    //     imgUrl: a.imgUrl
    //   };
    //  this.data.push(this.product_id_name_imgUrl);
    // })
    // return this.data;
    return this.data = Products;
  }

}
