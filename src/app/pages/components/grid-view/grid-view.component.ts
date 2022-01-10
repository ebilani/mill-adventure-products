import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category, Product } from 'src/app/models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  product: Product;
  @Output() selectedProduct = new EventEmitter<any>();
  categories: any = [];
  randomlySelectedCategory: any = [];
  constructor(private router: Router,private commonService: CommonService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.categories = this.commonService.categoryList.getValue();
    this.filterProductsDifferentFromSelected()
    console.log(this.route.snapshot.params.id, this.randomlySelectedCategory)
  }
  filterProductsDifferentFromSelected(){
   const filteredCategories = this.categories.filter(el=> el._id != this.route.snapshot.params.id);
   this.randomlySelectedCategory =  filteredCategories[Math.floor(Math.random()*filteredCategories.length)];
  }
  getProduct(product: Product){
    this.selectedProduct.emit(product);
    console.log(product, "prr")
  }
}
