import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/shared/layout/navbar/navbar.module';
import { HomeComponent } from './home.component';
import { FooterModule } from 'src/app/shared/layout/footer/footer.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule
  ],
})
export class HomeModule { }
