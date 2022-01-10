import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models';

@Component({
  selector: 'home-card',
  templateUrl: './homepage-card.component.html',
  styleUrls: ['./homepage-card.component.scss'],
})
export class HomePageCardComponent implements OnInit {
  @Input() listCategories: Category;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {}


  onSelectCategory(id: string) {
    this.router.navigate([`detail/${id}`], { relativeTo: this.route,
    });
  }
}
