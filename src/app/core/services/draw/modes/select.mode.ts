import MapboxDraw from '@mapbox/mapbox-gl-draw';
import type {
  DrawCustomMode,
  DrawCustomModeThis,
  MapMouseEvent,
} from '@mapbox/mapbox-gl-draw';
import type { GeoJSON } from 'geojson';

const { cursors } = MapboxDraw.constants;
const highlightPropertyName = '__highlighted';

export interface SelectFeatureState {
  api: {
    setFeatureProperty: (
      id: string,
      key: string,
      value: string | undefined,
    ) => void;
  };
  hoveredFeatureID: string | null;
  onCancel?: () => void;
  onSelect?: (featureId: string) => void;
  options: {
    disableHoverHighlight?: boolean;
    filterFeatureIds?: string[];
    highlightPropertyKey: string;
    selectHighlightColor: string;
  };
  selectedFeatureID: string | null;
}

export interface SelectFeatureOptions {
  _ctx: {
    api: {
      setFeatureProperty: (
        id: string,
        key: string,
        value: string | undefined,
      ) => void;
    };
    options?: {
      disableHoverHighlight?: boolean;
      filterFeatureIds?: string[];
      highlightPropertyKey?: string;
      selectHighlightColor?: string;
    };
  };
  disableHoverHighlight?: boolean;
  filterFeatureIds?: string[];
  highlightPropertyKey?: string;
  onCancel?: () => void;
  onSelect?: (featureId: string) => void;
  selectHighlightColor?: string;
}

const SelectMode: DrawCustomMode<SelectFeatureState, SelectFeatureOptions> = {
  onClick(
    this: DrawCustomModeThis &
      DrawCustomMode<SelectFeatureState, SelectFeatureOptions>,
    state: SelectFeatureState,
  ): void {
    state.selectedFeatureID = state.hoveredFeatureID;
    this.onStop?.(state);
  },

  onKeyUp(state: SelectFeatureState, e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      if (typeof state.onCancel === 'function') {
        setTimeout(state.onCancel, 0);
      }
    }
  },

  onMouseMove(
    this: MapboxDraw.DrawCustomModeThis &
      MapboxDraw.DrawCustomMode<SelectFeatureState, SelectFeatureOptions>,
    state: SelectFeatureState,
    e: MapMouseEvent,
  ): void {
    const { api } = state;
    const { featureTarget } = e;

    if (featureTarget) {
      this.updateUIClasses({ mouse: cursors.POINTER });
      const hoveringFeatureID = featureTarget.properties?.['id'];
      if (
        state.hoveredFeatureID &&
        state.hoveredFeatureID !== hoveringFeatureID
      ) {
        api.setFeatureProperty(
          state.hoveredFeatureID,
          highlightPropertyName,
          undefined,
        );
      }

      state.hoveredFeatureID = hoveringFeatureID;
      if (hoveringFeatureID) {
        api.setFeatureProperty(
          hoveringFeatureID,
          highlightPropertyName,
          state.options.selectHighlightColor,
        );
      }
    } else {
      if (state.hoveredFeatureID) {
        api.setFeatureProperty(
          state.hoveredFeatureID,
          highlightPropertyName,
          undefined,
        );
      }
      state.hoveredFeatureID = null;
    }
  },

  onSetup(
    this: DrawCustomModeThis &
      DrawCustomMode<SelectFeatureState, SelectFeatureOptions>,
    options: SelectFeatureOptions,
  ): SelectFeatureState {
    const {
      disableHoverHighlight,
      filterFeatureIds,
      highlightPropertyKey,
      onSelect,
      onCancel,
      selectHighlightColor,
    } = options;
    const internal = this as unknown as { _ctx: SelectFeatureOptions['_ctx'] };

    const state: SelectFeatureState = {
      api: internal._ctx.api,
      hoveredFeatureID: null,
      onCancel,
      onSelect,
      options: {
        disableHoverHighlight:
          disableHoverHighlight ?? internal._ctx.options?.disableHoverHighlight,

        filterFeatureIds:
          filterFeatureIds ?? internal._ctx.options?.filterFeatureIds,

        highlightPropertyKey:
          highlightPropertyKey ??
          internal._ctx.options?.highlightPropertyKey ??
          highlightPropertyName,

        selectHighlightColor:
          selectHighlightColor ??
          internal._ctx.options?.selectHighlightColor ??
          '#FFFF00',
      },
      selectedFeatureID: null,
    };

    return state;
  },

  onStop(
    this: MapboxDraw.DrawCustomModeThis &
      MapboxDraw.DrawCustomMode<SelectFeatureState, SelectFeatureOptions>,
    state: SelectFeatureState,
  ): void {
    this.updateUIClasses({ mouse: cursors.NONE });
    MapboxDraw.lib.doubleClickZoom.enable(this);
    this.activateUIButton();

    if (state.selectedFeatureID) {
      if (typeof state.onSelect === 'function') {
        setTimeout(() => state.onSelect!(state.selectedFeatureID!), 0);
      } else {
        this.map.fire('draw.select_mode.select', {
          featureID: state.selectedFeatureID,
        });
      }
      state.selectedFeatureID = null;
    } else if (typeof state.onCancel === 'function') {
      setTimeout(state.onCancel, 0);
    }

    if (state.hoveredFeatureID) {
      state.api.setFeatureProperty(
        state.hoveredFeatureID,
        highlightPropertyName,
        undefined,
      );
      state.hoveredFeatureID = null;
    }
  },

  toDisplayFeatures(
    state: SelectFeatureState,
    geojson: GeoJSON,
    display: (geojson: GeoJSON) => void,
  ): void {
    display(geojson);
  },
};

export default SelectMode;
