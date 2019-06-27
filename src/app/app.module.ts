import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddContactComponent } from './add-contact/add-contact.component';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpService} from './data/http.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import {MainPageModule} from './main-page/main.page.module';

const routes: Routes = [
  {path:'',component:AddContactComponent},
  // {path:'main', component:MainPageComponent}
  {path:'main',loadChildren: () => import('./main-page/main.page.module')
      .then(mod => mod.MainPageModule)
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    // MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    // MainPageModule,
    RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
