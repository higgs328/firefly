import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapComponent } from 'ngx-mapbox-gl';
import { mapboxProvider } from '../../../../core/providers/mapbox.provider';
import { TrailLayerComponent } from '../../layers/trail/trail.component';
import { SceneBaseComponent } from '../scene-base.component';

@Component({
  imports: [MapComponent, TrailLayerComponent],
  providers: [mapboxProvider],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-wildland-scene',
  standalone: true,
  styleUrl: './wildland.component.scss',
  templateUrl: './wildland.component.html',
})
export class WildlandSceneComponent extends SceneBaseComponent {
  override style = this.styles.wildland;
}
