import { Component, inject, OnInit } from '@angular/core';
import type { FeatureCollection, LineString, MultiLineString } from 'geojson';
import { GeoJSONSourceComponent, LayerComponent } from 'ngx-mapbox-gl';
import { TrailService } from '../../../../core/services/trail.service';

@Component({
  imports: [GeoJSONSourceComponent, LayerComponent],
  selector: 'app-trail-layer',
  standalone: true,
  styleUrl: './trail.component.scss',
  templateUrl: './trail.component.html',
})
export class TrailLayerComponent implements OnInit {
  private trailService = inject(TrailService);
  featureCollection?: FeatureCollection<LineString | MultiLineString>;

  ngOnInit(): void {
    this.trailService.trails.subscribe((features) => {
      this.featureCollection = {
        features,
        type: 'FeatureCollection',
      };
    });
  }
}
