import { LngLatLike } from 'mapbox-gl';
import { mapboxConfig } from '../../../core/configs/mapbox.config';
import { MapStyleConfig } from '../../../core/configs/mapbox.config.types';

export abstract class SceneBaseComponent {
  zoom: [number] = mapboxConfig.map.zoom;
  center: LngLatLike = mapboxConfig.map.center;
  styles: MapStyleConfig = mapboxConfig.styles;
  style: string = mapboxConfig.styles.default;
}
