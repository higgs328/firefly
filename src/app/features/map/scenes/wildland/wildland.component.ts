import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapComponent, provideMapboxGL } from 'ngx-mapbox-gl';
import { TrailLayerComponent } from '../../layers/trail/trail.component';

@Component({
  imports: [MapComponent, TrailLayerComponent],
  providers: [
    provideMapboxGL({
      accessToken:
        'pk.eyJ1IjoicmhpZ2dpbnMtY3ZmZCIsImEiOiJja2kxdjlzZmMxZTVpMnhvZHNmNXZsdDFpIn0.ta6054evoS8aIkY4hpSLeQ',
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-wildland-scene',
  standalone: true,
  styleUrl: './wildland.component.scss',
  templateUrl: './wildland.component.html',
})
export class WildlandSceneComponent {}
