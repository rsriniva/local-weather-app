import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'

const IMPORT_EXPORT_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
]

@NgModule({
  declarations: [],
  imports: IMPORT_EXPORT_MODULES,
  exports: IMPORT_EXPORT_MODULES,
})
export class MaterialModule {}
