import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';
import { Product } from 'src/app/models';
import { CommonService } from 'src/app/services/common.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
 products: Product[] = [];
 isLoadingResults: boolean = true;
 imageUrlAttach: string;
  constructor(private router: Router, private route: ActivatedRoute,private productsService: ProductsService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.imageUrlAttach = this.commonService.imageUrl;
    if (this.route.snapshot.params.id) {
     this.getProductsByCategoryId(this.route.snapshot.params.id)
   }
  }
  getProductsByCategoryId(id: string){
    this.productsService.getProductById(id).pipe(
      tap(el=>{
        this.products = el.data.getCategory.products;
      }),
      finalize(()=>{
        this.isLoadingResults = false;
      })
    ).subscribe();
  }
  onSelectProduct(id: string) {
    this.router.navigate([`product/${id}`], { relativeTo: this.route});
  }
}
