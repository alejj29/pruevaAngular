import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookUpsertComponent } from '../BookUpsert/BookUpsert.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'], // Corrección en el nombre del archivo de estilo
})
export class BookListComponent {
  // Lista inicial de libros
  books = [
    { id: 1, name: 'El Quijote' },
    { id: 2, name: 'Cien Años de Soledad' },
    { id: 3, name: 'La Odisea' },
    { id: 4, name: 'El Principito' },
  ];

  // Lista de libros filtrados (se actualiza al buscar o modificar)
  filteredBooks = [...this.books];

  // Columnas visibles en la tabla
  displayedColumns = ['id', 'name', 'actions'];

  // Formulario reactivo para agregar o editar libros
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    // Inicializa el formulario con validadores
    this.bookForm = this.fb.group({
      id: [''], // Campo para el ID del libro
      name: ['', Validators.required], // Campo para el nombre del libro (obligatorio)
    });
  }

  /**
   * Abre el diálogo para crear un nuevo libro
   */
  onCreate(): void {
    this.openDialog(false);
  }

  /**
   * Abre el diálogo para crear o editar un libro.
   * @param isEditMode - Indica si es un modo de edición o creación.
   * @param data - Datos del libro a editar (opcional).
   */
  openDialog(isEditMode: boolean, data?: any): void {
    const dialogRef = this.dialog.open(BookUpsertComponent, {
      panelClass: 'custom-dialog-container50',
      data: { isEditMode, ...data },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Si se cierra el diálogo con datos, actualiza la lista
        console.log("resultado",result)
        if (isEditMode) {
          const index = this.books.findIndex((book) => book.id === result.id);
          if (index >= 0) {
            this.books[index] = result; // Actualiza el libro existente
          }
        } else {
          this.books.push(result); // Agrega un nuevo libro
        }
        this.filteredBooks = [...this.books];
        Swal.fire({
          icon: 'success',
          title: isEditMode ? '¡Libro actualizado con éxito!' : '¡Libro creado con éxito!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  /**
   * Filtra los libros según el término de búsqueda proporcionado.
   * @param searchTerm - Término de búsqueda ingresado por el usuario.
   */
  filterBooks(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredBooks = this.books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm)
    );
  }

  /**
   * Abre el diálogo para editar un libro existente.
   * @param book - Libro que se desea editar.
   */
  editBook(book: any): void {
    this.openDialog(true, book);
  }

  /**
   * Elimina un libro de la lista, mostrando una confirmación previa.
   * @param bookToDelete - Libro que se desea eliminar.
   */
  deleteBook(bookToDelete: any): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar el libro "${bookToDelete.name}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Elimina el libro de la lista
        this.books = this.books.filter((book) => book.id !== bookToDelete.id);
        this.filteredBooks = [...this.books];

        // Muestra un mensaje de éxito
        Swal.fire('¡Eliminado!', `El libro "${bookToDelete.name}" ha sido eliminado.`, 'success');
      }
    });
  }

  /**
   * Resetea el formulario a su estado inicial.
   */
  resetForm(): void {
    this.bookForm.reset();
  }
}
