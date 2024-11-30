import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Necesario para ejecutar Angular en un navegador
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BooksModule } from './books/books.module';


@NgModule({
  declarations: [
    AppComponent // El componente raíz se declara aquí
  ],
  imports: [
    BooksModule,
    BrowserModule,
    AppRoutingModule, // Se importa el módulo de rutas
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    // Aquí se definen los servicios globales para inyección de dependencias

    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent] // Establece el componente raíz que se inicializará
})
export class AppModule { }

