import { LngLatLike } from 'mapbox-gl';
import { mapboxConfig } from '../../../core/configs/mapbox.config';

export abstract class SceneBaseComponent {
  zoom: [number] = mapboxConfig.defaults.zoom;
  center: LngLatLike = mapboxConfig.defaults.center;
}
