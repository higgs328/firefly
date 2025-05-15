import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapComponent } from '../map.component';

@Component({
  imports: [MapComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-map-wildland',
  standalone: true,
  styleUrl: './map-wildland.component.scss',
  templateUrl: './map-wildland.component.html',
})
export class MapWildlandComponent {}
