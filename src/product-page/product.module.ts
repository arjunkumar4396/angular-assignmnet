import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingRoutingModule } from './product-routing-routing.module';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/shared/search.pipe';

@NgModule({
  declarations: [ProductPageComponent, ProductListComponent, SearchPipe],
  imports: [CommonModule, FormsModule, ProductRoutingRoutingModule],
})
export class ProductModule {}
