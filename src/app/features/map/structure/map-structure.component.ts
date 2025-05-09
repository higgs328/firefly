import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@arcgis/map-components/components/arcgis-map';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-map-structure',
  standalone: true,
  styleUrl: './map-structure.component.scss',
  templateUrl: './map-structure.component.html',
})
export class MapStructureComponent {}
