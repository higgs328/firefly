import { LngLatLike } from 'mapbox-gl';
import {
  mapboxConfig,
  MapStyleConfig,
} from '../../../core/configs/mapbox.config';

export abstract class SceneBaseComponent {
  zoom: [number] = mapboxConfig.map.zoom;
  center: LngLatLike = mapboxConfig.map.center;
  styles: MapStyleConfig = mapboxConfig.styles;
  style: string = mapboxConfig.styles.default;
}
