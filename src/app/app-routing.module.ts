import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{GalleryComponent} from './gallery/gallery.component';
import{HomeComponent}from './home/home.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
