import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

import { ReleaseItemComponent } from './release-item/release-item.component';
import { ReleaseListComponent } from './release-list/release-list.component';
import { ReleaseFilterComponent } from './release-filter/release-filter.component';
import { ReleaseAddItemComponent } from './release-add-item/release-add-item.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ReleaseItemComponent,
    ReleaseListComponent,
    ReleaseFilterComponent,
    ReleaseAddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
