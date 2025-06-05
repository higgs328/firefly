import { LngLatLike, Map } from 'mapbox-gl';
import { mapboxConfig } from '../../../core/configs/mapbox.config';
import { MapStyleConfig } from '../../../core/configs/mapbox.config.types';
import { DrawService } from '../../../core/services/draw.service';

export abstract class SceneBase {
  protected zoom: [number] = mapboxConfig.map.zoom;
  protected center: LngLatLike = mapboxConfig.map.center;
  protected styles: MapStyleConfig = mapboxConfig.styles;
  protected style: string = mapboxConfig.styles.default;
  protected drawService: DrawService;

  constructor(drawService: DrawService) {
    this.drawService = drawService;
  }

  protected mapCreate(map: Map): void {
    this.drawService.init(map);
  }
}
