import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { CardSpaceComponent } from './components/card-space/card-space.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    CardSpaceComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    CardSpaceComponent
  ]
})
export class SharedModule { }
