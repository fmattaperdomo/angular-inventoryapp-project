import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListProductComponent } from './products/list-product/list-product.component';

@Component({
  selector: 'app-root',
  imports: [ListProductComponent,RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'inventory-app-frontend';
}
