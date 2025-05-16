import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  MapComponent as MapboxMapComponent,
  provideMapboxGL,
} from 'ngx-mapbox-gl';

@Component({
  imports: [CommonModule, MapboxMapComponent],
  providers: [
    provideMapboxGL({
      accessToken:
        'pk.eyJ1IjoicmhpZ2dpbnMtY3ZmZCIsImEiOiJja2kxdjlzZmMxZTVpMnhvZHNmNXZsdDFpIn0.ta6054evoS8aIkY4hpSLeQ',
    }),
  ],
  selector: 'app-map',
  styleUrl: './map.component.scss',
  templateUrl: './map.component.html',
})
export class MapComponent {
  @Input() style!: string;
  @Input() center: [number, number] = [-73.9150899, 41.32923];
  @Input() zoom = 12;
}
