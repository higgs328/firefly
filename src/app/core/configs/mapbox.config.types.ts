import { LngLatLike } from 'mapbox-gl';

export type MapStyleKey = 'default' | 'structure' | 'street' | 'wildland';

export type MapStyleConfig = Record<MapStyleKey, string>;

export interface MapboxConfig {
  accessToken: string;
  map: {
    center: LngLatLike;
    zoom: [number];
  };
  styles: MapStyleConfig;
}
