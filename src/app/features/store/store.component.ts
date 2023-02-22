import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/interfaces/product';
import { productsArray } from 'src/assets/productsArray';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{
//@Input() products?:Product[]
products:Product[] =[]
constructor(private productService:ProductService){}

ngOnInit(): void {
    this.productService.listProducts().subscribe((products)=>{

      this.products = products
    })
}

}
