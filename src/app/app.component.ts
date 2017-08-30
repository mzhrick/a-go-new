import { Component,OnInit } from '@angular/core';
import { GetMockService } from "./service/get-mock.service";
import { ProductModel } from './mock_product/mock_product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  logIn : boolean = false;
  products : ProductModel[];

  constructor(private getMock : GetMockService){}

  ngOnInit(){
    // this.products = this.getMock.getData();
    console.log(this.getMock.getData());
  }

}
