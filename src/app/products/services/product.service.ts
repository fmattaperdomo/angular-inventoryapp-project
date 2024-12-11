import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlBase = "http://localhost:8080/inventoryapp/products";

  constructor(private clienteHttp: HttpClient) { }

  getProductsList(): Observable<Product[]>{
    return this.clienteHttp.get<Product[]>(this.urlBase);
  }

}
