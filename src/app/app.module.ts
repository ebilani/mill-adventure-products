import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomePageCardComponent } from './pages/components/homepage-card/homepage-card.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductsListComponent } from './pages/components/products-list/products-list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProductsDetailsComponent } from './pages/components/products-details/products-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GridViewComponent } from './pages/components/grid-view/grid-view.component';
import { CountdownViewComponent } from './pages/components/products-details/countdown-view/countdown-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomePageCardComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    GridViewComponent,
    CountdownViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
