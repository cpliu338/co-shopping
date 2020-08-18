import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// For components using angular-animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports of used components 
import { 
  MatButtonModule,
  MatInputModule, 
  MatCardModule, MatIconModule, MatFormFieldModule,
  MatToolbarModule
} from '@angular/material';

//import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule, MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule, MatIconModule, MatFormFieldModule,
    MatToolbarModule
  ],
  declarations: []
})
export class AngularMaterialModule { }