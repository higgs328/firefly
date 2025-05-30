import { LngLatLike, Map } from 'mapbox-gl';
import { mapboxConfig } from '../../../core/configs/mapbox.config';
import { MapStyleConfig } from '../../../core/configs/mapbox.config.types';
import { DrawService } from '../../../core/services/draw.service';

export abstract class SceneBase {
  zoom: [number] = mapboxConfig.map.zoom;
  center: LngLatLike = mapboxConfig.map.center;
  styles: MapStyleConfig = mapboxConfig.styles;
  style: string = mapboxConfig.styles.default;
  protected drawService: DrawService;

  constructor(drawService: DrawService) {
    this.drawService = drawService;
  }

  mapCreate(map: Map): void {
    this.drawService.init(map);
  }
}
