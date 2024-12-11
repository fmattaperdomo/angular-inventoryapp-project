import { Routes } from '@angular/router';
import { ListProductComponent } from './products/list-product/list-product.component';

export const routes: Routes = [
    {path:'products', component: ListProductComponent},
    {path:'', redirectTo: 'products', pathMatch:'full'}
];
