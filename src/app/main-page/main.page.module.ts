import {NgModule} from '@angular/core';
import {MainPageComponent} from './main-page.component';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path:'',component:MainPageComponent}
];
@NgModule({
  declarations:[
    MainPageComponent
  ],
  imports:[
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  providers:[]
})
export class MainPageModule {

}
