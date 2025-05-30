import { Component, inject, OnInit } from '@angular/core';
import type { FeatureCollection, LineString, MultiLineString } from 'geojson';
import { GeoJSONSourceComponent, LayerComponent } from 'ngx-mapbox-gl';
import { DrawService } from '../../../../core/services/draw.service';
import { TrailService } from '../../../../core/services/trail.service';
import { LayerBase } from '../layer-base';

@Component({
  imports: [GeoJSONSourceComponent, LayerComponent],
  selector: 'app-trail-layer',
  standalone: true,
  styleUrl: './trail.component.scss',
  templateUrl: './trail.component.html',
})
export class TrailLayerComponent extends LayerBase implements OnInit {
  override layerId = 'test';

  public featureCollection?: FeatureCollection<LineString | MultiLineString>;

  private trailService = inject(TrailService);

  constructor(drawService: DrawService) {
    super(drawService);
  }

  ngOnInit(): void {
    this.trailService.trails.subscribe((features) => {
      this.featureCollection = {
        features,
        type: 'FeatureCollection',
      };
    });
  }
}
