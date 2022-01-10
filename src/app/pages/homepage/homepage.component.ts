import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import {finalize,  tap } from 'rxjs/operators';
import { Category } from 'src/app/models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  categoryList: Category[] = [];
  isLoadingResults: boolean = true;
  constructor(
    private productsService: ProductsService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.productsService
      .getCategoryList()
      .pipe(
        tap((el) => {
          this.categoryList = el.data.getCategoryList.items;
          this.commonService.categoryList.next(this.categoryList)
          console.log(el);
        }),
        finalize(()=>{ this.isLoadingResults = false})
      )
      .subscribe();
  }
}
