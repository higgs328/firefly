import MapboxDraw from '@mapbox/mapbox-gl-draw';
import type {
  DrawCustomMode,
  DrawCustomModeThis,
  DrawFeature,
  MapMouseEvent,
} from '@mapbox/mapbox-gl-draw';
import simplify from '@turf/simplify';
import type { Feature, Polygon } from 'geojson';

const { geojsonTypes, cursors, types, updateActions, modes, events } =
  MapboxDraw.constants;

interface FreehandState {
  polygon: DrawFeature;
  currentVertexPosition: number;
  dragMoving: boolean;
}

interface FreehandOptions {
  map: mapboxgl.Map;
  newFeature: (feature: Feature) => DrawFeature;
  addFeature: (feature: DrawFeature) => void;
  clearSelectedFeatures: () => void;
  updateUIClasses: (ui: { mouse: string }) => void;
  activateUIButton: (type: string) => void;
  setActionableState: (actions: { trash: boolean }) => void;
  changeMode: (mode: string, options?: object) => void;
  getSelected: () => DrawFeature[];
  fireUpdate: () => void;
  simplify: (polygon: DrawFeature) => void;
}

const FreehandMode: DrawCustomMode<FreehandState, FreehandOptions> = {
  ...MapboxDraw.modes.draw_polygon,

  onDrag(
    this: DrawCustomModeThis & DrawCustomMode<FreehandState, FreehandOptions>,
    state: FreehandState,
    e: MapMouseEvent,
  ): void {
    state.dragMoving = true;
    this.updateUIClasses({ mouse: cursors.ADD });

    const path = `0.${state.currentVertexPosition}`;
    state.polygon.updateCoordinate(path, e.lngLat.lng, e.lngLat.lat);
    state.currentVertexPosition++;

    const nextPath = `0.${state.currentVertexPosition}`;
    state.polygon.updateCoordinate(nextPath, e.lngLat.lng, e.lngLat.lat);
  },

  onMouseUp(
    this: MapboxDraw.DrawCustomModeThis &
      MapboxDraw.DrawCustomMode<FreehandState, FreehandOptions>,
    state: FreehandState,
  ): void {
    if (state.dragMoving) {
      const zoom = this.map.getZoom();
      const tolerance = 1 / Math.pow(1.05, 10 * zoom);
      simplify(state.polygon.toGeoJSON() as Feature<Polygon>, {
        highQuality: true,
        mutate: true,
        tolerance,
      });
      this.map.fire(events.UPDATE, {
        action: updateActions.MOVE,
        features: this.getSelected().map((f) => f.toGeoJSON()),
      });
      this.changeMode(modes.SIMPLE_SELECT, { featureIds: [state.polygon.id] });
    }
  },

  onSetup(
    this: DrawCustomModeThis & DrawCustomMode<FreehandState, FreehandOptions>,
  ): FreehandState {
    const polygon = this.newFeature({
      geometry: {
        coordinates: [[]],
        type: geojsonTypes.POLYGON,
      },
      properties: {},
      type: geojsonTypes.FEATURE,
    });

    this.addFeature(polygon);
    this.clearSelectedFeatures();
    this.updateUIClasses({ mouse: cursors.ADD });
    this.activateUIButton(types.POLYGON);
    this.setActionableState({
      combineFeatures: false,
      trash: true,
      uncombineFeatures: false,
    });

    return {
      currentVertexPosition: 0,
      dragMoving: false,
      polygon,
    };
  },

  onStop(
    this: MapboxDraw.DrawCustomModeThis &
      MapboxDraw.DrawCustomMode<FreehandState, FreehandOptions>,
    state: FreehandState,
  ): void {
    const baseOnStop = MapboxDraw.modes.draw_polygon.onStop;

    if (typeof baseOnStop === 'function') {
      baseOnStop.call(this, state);
    }

    setTimeout(() => {
      if (!this.map?.dragPan) return;
      this.map.dragPan.enable();
    }, 0);
  },

  onTouchEnd(
    this: MapboxDraw.DrawCustomModeThis &
      MapboxDraw.DrawCustomMode<FreehandState, FreehandOptions>,
    state: FreehandState,
    e: MapboxDraw.MapTouchEvent,
  ): void {
    this.onMouseUp?.(state, e as unknown as MapboxDraw.MapMouseEvent);
  },

  onTouchMove(
    this: MapboxDraw.DrawCustomModeThis &
      MapboxDraw.DrawCustomMode<FreehandState, FreehandOptions>,
    state: FreehandState,
    e: MapboxDraw.MapTouchEvent,
  ): void {
    this.onDrag?.(state, e as unknown as MapboxDraw.MapMouseEvent);
  },
};

export default FreehandMode;
