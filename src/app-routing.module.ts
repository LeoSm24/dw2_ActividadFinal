// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { HeroesComponent } from './heroes/heroes.component';

// //import { CommonModule } from '@angular/common';

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes', component: HeroesComponent }
// ];

// @NgModule({
//   //declarations: [],
//   /*imports: [
//     CommonModule
//   ]*/
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../src/app/dashboard/dashboard.component';
import { HeroesComponent } from '../src/app/heroes/heroes.component';
import { HeroDetailComponent } from '../src/app/hero-detail/hero-detail.component';// Import HeroDetailComponent

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
