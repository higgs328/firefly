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
  selector: 'app-structure-scene',
  standalone: true,
  styleUrl: './structure.component.scss',
  templateUrl: './structure.component.html',
})
export class StructureSceneComponent {}
