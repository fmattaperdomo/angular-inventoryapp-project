import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-product',
  imports: [CommonModule],
  templateUrl: './list-product.component.html'
})
export class ListProductComponent {
  products: Product[];

  constructor(private productService: ProductService){}
  
  ngOnInit(){
    //Cargamos los productos
    this.getProducts();
  }

  private getProducts(){
    // Consumir los datos del observable (suscribirnos)
    this.productService.getProductsList().subscribe(
      (datos => {
        this.products = datos;
      })
    );
  }

}
