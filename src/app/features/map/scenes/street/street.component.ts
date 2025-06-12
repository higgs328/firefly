import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EnvironmentInjector,
} from '@angular/core';
import { MapComponent } from 'ngx-mapbox-gl';
import { mapboxProvider } from '../../../../core/providers/mapbox.provider';
import { DrawService } from '../../../../core/services/draw.service';
import { SceneBase } from '../scene-base';

@Component({
  imports: [MapComponent],
  providers: [mapboxProvider],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-street-scene',
  standalone: true,
  styleUrl: './street.component.scss',
  templateUrl: './street.component.html',
})
export class StreetSceneComponent extends SceneBase {
  protected override style = this.styles.street;

  constructor(drawService: DrawService, injector: EnvironmentInjector) {
    super(drawService, injector);
  }
}
