import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '../../components/main/main.component';
import { HeaderComponent } from '../../components/main/header/header.component';
import { FilterComponent } from '../../components/main/header/filter/filter.component';
import { SearchComponent } from '../../components/main/header/search/search.component';
import { MaterialModule } from '../../shared/material/material.module';
import { UserComponent } from '../../components/main/header/user/user.component';

const COMPONENTS = [
  MainComponent,
  HeaderComponent,
  FilterComponent,
  SearchComponent,
  UserComponent,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MainRoutingModule, MaterialModule],
  exports: [...COMPONENTS],
})
export class MainModule {}
