import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageCardComponent } from './pages/components/homepage-card/homepage-card.component';
import { ProductsDetailsComponent } from './pages/components/products-details/products-details.component';
import { ProductsListComponent } from './pages/components/products-list/products-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  {
    path: 'categories',
    component: HomepageComponent,
    children: [{ path: '', component: HomePageCardComponent }],
  },
  { path: 'categories/detail/:id', component: ProductsListComponent },
  {
    path: 'categories/detail/:id/product/:id_prod',
    component: ProductsDetailsComponent,
  },
  { path: '**', redirectTo: '/categories', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
