import { Routes } from '@angular/router';
import { ListProductComponent } from './products/list-product/list-product.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';

export const routes: Routes = [
    {path:'products', component: ListProductComponent},
    {path:'', redirectTo: 'products', pathMatch:'full'},
    {path:'add-product', component: AddProductComponent},
    {path: 'edit-product/:id', component: EditProductComponent}    
  ];
