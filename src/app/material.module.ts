import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const matrailComponent = [MatProgressSpinnerModule, MatButtonModule];
@NgModule({
  imports: matrailComponent,
  exports: matrailComponent,
})
export class MaterialModule {}
