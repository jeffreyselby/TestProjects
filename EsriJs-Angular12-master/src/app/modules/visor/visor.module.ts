import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisorRoutingModule } from './visor-routing.module';
import { MapComponent } from './components/map/map.component';


@NgModule({
  imports: [
    CommonModule,
    VisorRoutingModule
  ],
  declarations: [
    MapComponent
  ],
  exports: [MapComponent]
})
export class VisorModule { }
