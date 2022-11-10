import { NgModule } from "@angular/core"
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table'
import {MatSortModule } from '@angular/material/sort'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatInputModule} from '@angular/material/input'
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  exports: [
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSnackBarModule
  ],
})
export class MaterialModule {}
