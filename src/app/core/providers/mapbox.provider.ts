import { provideMapboxGL } from 'ngx-mapbox-gl';
import { mapboxConfig } from '../configs/mapbox.config';

export const mapboxProvider = provideMapboxGL({
  accessToken: mapboxConfig.accessToken,
});
