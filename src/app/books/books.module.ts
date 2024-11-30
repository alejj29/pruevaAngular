import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importación de módulos de formularios

import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { BookUpsertComponent } from './BookUpsert/BookUpsert.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    BookListComponent,
    BookListComponent,
    BookUpsertComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule, // Módulo para formularios template-driven
    ReactiveFormsModule, // Módulo para formularios
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDialogModule

  ]
})
export class BooksModule { }
