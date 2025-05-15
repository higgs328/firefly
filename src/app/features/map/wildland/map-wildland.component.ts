import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { latLng, tileLayer } from 'leaflet';

@Component({
  imports: [LeafletModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-map-wildland',
  standalone: true,
  styleUrl: './map-wildland.component.scss',
  templateUrl: './map-wildland.component.html',
})
export class MapWildlandComponent {
  options = {
    center: latLng(41.32923, -73.9150899),
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }),
    ],
    zoom: 12,
  };
}
