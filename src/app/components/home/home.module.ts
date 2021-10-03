import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HomeService } from './shared/home.service';
import { Routes } from '@angular/router';
 
export const HomeRoutes: Routes = [
	{ 
		path: 'home', 
		component: HomeComponent 
	}
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    HomeService
  ],
  imports: [
    CommonModule
  ]
})

export class HomeModule { }
