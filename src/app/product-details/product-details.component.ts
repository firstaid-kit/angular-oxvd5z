import { Component, OnInit } from '@angular/core';
// specific to each component that the Angular Router loads
// contains info about the route and params
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute // by injecting this here the component is configured to use a service
  ) {}

  ngOnInit() {
    // extract ID from route params and find the corresponding product
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
