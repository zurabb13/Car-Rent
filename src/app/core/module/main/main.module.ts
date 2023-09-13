import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '../../components/main/main.component';
import { HeaderComponent } from '../../components/main/header/header.component';
import { FilterComponent } from '../../components/main/header/filter/filter.component';
import { SearchComponent } from '../../components/main/header/search/search.component';
import { MaterialModule } from '../../shared/material/material.module';
import { UserComponent } from '../../components/main/header/user/user.component';
import { ItemsComponent } from '../../components/main/items/items.component';
import { ItemsDetailsComponent } from '../../components/main/items/items-details/items-details.component';
import { ItemsInfoComponent } from '../../components/main/items/items-info/items-info.component';
import { HttpClientModule } from '@angular/common/http';

const COMPONENTS = [
  MainComponent,
  HeaderComponent,
  FilterComponent,
  SearchComponent,
  UserComponent,
  ItemsComponent,
  ItemsDetailsComponent,
  ItemsInfoComponent,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MainRoutingModule, MaterialModule, HttpClientModule],
  exports: [...COMPONENTS],
})
export class MainModule {}
