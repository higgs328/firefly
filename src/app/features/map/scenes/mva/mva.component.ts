import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapComponent, provideMapboxGL } from 'ngx-mapbox-gl';
import { mapboxConfig } from '../../../../core/configs/mapbox.config';
import { TrailLayerComponent } from '../../layers/trail/trail.component';

@Component({
  imports: [MapComponent, TrailLayerComponent],
  providers: [
    provideMapboxGL({
      accessToken: mapboxConfig.accessToken,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-mva-scene',
  standalone: true,
  styleUrl: './mva.component.scss',
  templateUrl: './mva.component.html',
})
export class MVASceneComponent {}
