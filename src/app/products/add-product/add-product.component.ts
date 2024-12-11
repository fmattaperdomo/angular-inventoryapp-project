import { Component, Input, input, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html'
})
export class AddProductComponent {
  product: Product = new Product();

  constructor(private productServce: ProductService,
    private router: Router){}

  onSubmit(){
    this.saveProduct();
  }

  saveProduct(){
    this.productServce.addProduct(this.product).subscribe(
      {
        next: (datos) => {
          this.goListProducts();
        },
        error: (error: any) => {console.log(error)}
      }
    );
  }

  goListProducts(){
    this.router.navigate(['/products']);
  }

}
