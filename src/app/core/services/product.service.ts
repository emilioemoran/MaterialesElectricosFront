import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService:HttpService) { }

  listProducts(): Observable<any> {
    return this.httpService.get(environment.endpoints.product.list).pipe(
      map(
        (resp: any) => resp
      )
    );
  }
}
