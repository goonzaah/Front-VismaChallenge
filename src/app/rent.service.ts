import { Injectable } from "@angular/core";
import { HttpClient,HttpParams  } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RentService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('https://localhost:44387/v1/rent/getProducts');
  }
  getPrice(productId, days, hours, quantity) {
    let params = new HttpParams();

    params = params.append('days', days? days : 0);
    params = params.append('hours', hours? hours : 0);
    params = params.append('quantity', quantity);
    params = params.append('productId', productId);

    return this.http.get('https://localhost:44387/v1/rent/getPrice', { params: params })
    
  }
}
