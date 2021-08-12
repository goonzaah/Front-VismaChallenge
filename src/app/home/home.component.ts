import { Component, OnInit } from "@angular/core";
import { RentService } from "../rent.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  products: Object;
  selectedProduct;
  hours: Number = 0;
  days: Number = 0;
  quantity;
  rentResult;

  constructor(private rentService: RentService) {}

  // on init the Dataservice getUsers() function supplies a user array object.
  ngOnInit() {
    this.rentService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  calcular() {
    if( this.selectedProduct != null && this.quantity !=null
      && (this.hours > 0|| this.hours > 0))
      
      this.rentService.getPrice(this.selectedProduct.id, this.days, this.hours, this.quantity).subscribe(data =>{
      this.rentResult = data
    })
  }
  
}
