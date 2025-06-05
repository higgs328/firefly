import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapComponent } from 'ngx-mapbox-gl';
import { mapboxProvider } from '../../../../core/providers/mapbox.provider';
import { DrawService } from '../../../../core/services/draw.service';
import { TrailLayerComponent } from '../../layers/trail/trail.component';
import { SceneBase } from '../scene-base';

@Component({
  imports: [MapComponent, TrailLayerComponent],
  providers: [mapboxProvider],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-wildland-scene',
  standalone: true,
  styleUrl: './wildland.component.scss',
  templateUrl: './wildland.component.html',
})
export class WildlandSceneComponent extends SceneBase {
  protected override style = this.styles.wildland;

  constructor(drawService: DrawService) {
    super(drawService);
  }
}
