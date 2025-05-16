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
  selector: 'app-structure-scene',
  standalone: true,
  styleUrl: './structure.component.scss',
  templateUrl: './structure.component.html',
})
export class StructureSceneComponent {}
