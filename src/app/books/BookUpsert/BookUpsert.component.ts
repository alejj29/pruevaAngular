import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-BookUpsert',
  templateUrl: './BookUpsert.component.html',
  styleUrls: ['./BookUpsert.component.css'],
})
export class BookUpsertComponent implements OnInit {
  bookForm: FormGroup; // Formulario reactivo para manejar los datos del libro
  isEditMode: boolean; // Indica si el diálogo está en modo de edición

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookUpsertComponent>, // Referencia al diálogo actual
    @Inject(MAT_DIALOG_DATA) public data: any // Datos inyectados desde el componente padre
  ) {
    // Inicializa el formulario con los datos proporcionados o valores vacíos
    this.isEditMode = data.isEditMode;
    this.bookForm = this.fb.group({
      id: [data?.id || '', Validators.required], // Campo ID obligatorio
      name: [data?.name || '', Validators.required], // Campo Nombre obligatorio
    });
  }

  ngOnInit(): void {
    // Debugging: Muestra los datos recibidos
    console.log('Datos recibidos en el diálogo:', this.data);
  }

  /**
   * Guarda los datos del formulario y cierra el diálogo.
   */
  save(): void {
    if (this.bookForm.valid) {
      this.dialogRef.close(this.bookForm.value); // Devuelve los datos del formulario al componente padre
    }
  }

  /**
   * Cierra el diálogo sin guardar cambios.
   */
  cancel(): void {
    this.dialogRef.close(); // Cierra el diálogo sin devolver datos
  }
}
