import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { FoodComponent } from './pages/food/food.component';
import { RegistRestaurantComponent } from './pages/regist-restaurant/regist-restaurant.component';
import { VerifyComponent } from './pages/auth/components/verify/verify.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'food',
    component: FoodComponent
  },
  {
    path: 'resgist-restaurant',
    component: RegistRestaurantComponent
  },
  {
    path: 'verify',
    component: VerifyComponent
  },

  {
    path: 'order',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
