import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedLibModule } from './shared-lib/shared-lib.module';
import { HomeComponent } from './home/home.component';
import { SchoolComponent } from './school/school.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedLibService } from './shared-lib/shared-lib.service';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'school',
    component: SchoolComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedLibModule.forRoot({
      names: ['Jane Doe', 'Foo Bar']
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [SharedLibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
