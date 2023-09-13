import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';

const UX = [MatIconModule, MatButtonModule, MatInputModule, MatBadgeModule];

@NgModule({
  declarations: [],
  imports: [...UX],
  exports: [...UX],
})
export class MaterialModule {}
