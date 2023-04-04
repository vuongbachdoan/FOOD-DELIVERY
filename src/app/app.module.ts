import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodModule } from './pages/food/food.module';
import { HomeModule } from './pages/home/home.module';
import { AuthModule } from './pages/auth/auth.module';
import { VerifyModule } from './pages/auth/components/verify/verify.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FoodModule,
    AuthModule,
    VerifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
