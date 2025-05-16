import { Component } from '@angular/core';
import type { FeatureCollection, LineString } from 'geojson';
import { GeoJSONSourceComponent, LayerComponent } from 'ngx-mapbox-gl';

@Component({
  imports: [GeoJSONSourceComponent, LayerComponent],
  selector: 'app-trail-layer',
  standalone: true,
  styleUrl: './trail.component.scss',
  templateUrl: './trail.component.html',
})
export class TrailLayerComponent {
  geojson: FeatureCollection<LineString> = {
    features: [
      {
        geometry: {
          coordinates: [
            [-73.9150899, 41.32923],
            [-73.9030899, 41.34323],
          ],
          type: 'LineString',
        },
        properties: {},
        type: 'Feature',
      },
    ],
    type: 'FeatureCollection',
  };
}
