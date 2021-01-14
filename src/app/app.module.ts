import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElementsComponent } from './elements/elements.component';
import { AccountComponent } from './account/account.component';
import { AddElementComponent } from './add-element/add-element.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'elements',
    component: ElementsComponent,
    children: [
      {
        path: 'add',
        component: AddElementComponent,
      },
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    ElementsComponent,
    AccountComponent,
    AddElementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes, {
      enableTracing: true,
      useHash: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
