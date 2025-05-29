import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapComponent } from 'ngx-mapbox-gl';
import { mapboxProvider } from '../../../../core/providers/mapbox.provider';
import { DrawService } from '../../../../core/services/draw.service';
import { SceneBaseComponent } from '../scene-base.component';

@Component({
  imports: [MapComponent],
  providers: [mapboxProvider],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-street-scene',
  standalone: true,
  styleUrl: './street.component.scss',
  templateUrl: './street.component.html',
})
export class StreetSceneComponent extends SceneBaseComponent {
  override style = this.styles.street;

  constructor(drawService: DrawService) {
    super(drawService);
  }
}
