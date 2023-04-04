import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food.component';
import { NavbarModule } from 'src/app/shared/layout/navbar/navbar.module';
import { FooterModule } from 'src/app/shared/layout/footer/footer.module';
import { FoodCardComponent } from './components/food-card/food-card.component';


@NgModule({
  declarations: [FoodComponent, FoodCardComponent, FoodCardComponent],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule
  ]
})
export class FoodModule { }
