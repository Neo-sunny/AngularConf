import { Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';

import { HomeComponent } from '../home/home.component';

export const routes: Routes=[
    {path:'home', component:HomeComponent},
    { path: '' , redirectTo:'home', pathMatch:'full'}
];