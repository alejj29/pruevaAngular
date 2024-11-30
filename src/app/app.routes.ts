import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule) // Lazy loading de BooksModule
  },
  { path: '', redirectTo: '/books', pathMatch: 'full' }, // Redirige la raíz a /books
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Pasa las rutas directamente a forRoot()
  exports: [RouterModule]
})
export class AppRoutingModule { }
