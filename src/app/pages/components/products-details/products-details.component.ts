import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';
import { Product } from 'src/app/models';
import { CommonService } from 'src/app/services/common.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  product: Product;
  isLoadingResults: boolean = true;
  viewCountDown: boolean = false;
  imageUrlAttach: string;
  constructor(private route: ActivatedRoute, private productsService: ProductsService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.imageUrlAttach = this.commonService.imageUrl;
    if(this.route.snapshot.params.id_prod){
      this.getDetailsOfProducts(this.route.snapshot.params.id_prod);
    }
  }
  getDetailsOfProducts(id: string){
    this.productsService.getProductDetails(id).pipe(
      tap(el=>{
        this.product = el.data.getProduct;
      }),
      finalize(()=>{ this.isLoadingResults = false})
    ).subscribe()
  }
  productFromGrid(product: Product){
    this.product = product;
  }
  startCountDown(){
    this.viewCountDown = true;
  }
}
