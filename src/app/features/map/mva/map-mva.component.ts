import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@arcgis/map-components/components/arcgis-map';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-map-mva',
  standalone: true,
  styleUrl: './map-mva.component.scss',
  templateUrl: './map-mva.component.html',
})
export class MapMVAComponent {}
