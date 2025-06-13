import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  Injectable,
} from '@angular/core';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { IControl, Map as MapboxMap } from 'mapbox-gl';
import { DrawComponent } from '../../../features/map/components/draw/draw.component';
import FreehandMode from './modes/freehand.mode';
import SelectMode from './modes/select.mode';

@Injectable({ providedIn: 'root' })
export class DrawService {
  private mapboxMap!: MapboxMap;
  private mapboxDraw!: MapboxDraw;

  constructor(private app: ApplicationRef) {}

  private initMapboxDraw(mapboxMap: MapboxMap): MapboxDraw {
    const mapboxDraw = new MapboxDraw({
      displayControlsDefault: false,
      modes: {
        ...MapboxDraw.modes,
        freehand: FreehandMode,
        select: SelectMode,
      } as Record<string, MapboxDraw.DrawCustomMode<object, object>>,
    });
    mapboxMap.addControl(mapboxDraw);
    return mapboxDraw;
  }

  private initDrawControl(
    mapboxMap: MapboxMap,
    injector: EnvironmentInjector,
  ): void {
    const drawElement = document.createElement('div');
    const drawComponent: ComponentRef<DrawComponent> = createComponent(
      DrawComponent,
      {
        environmentInjector: injector,
      },
    );
    drawElement.appendChild(drawComponent.location.nativeElement);
    const drawControl = {
      onAdd: (): HTMLDivElement => drawElement,
      onRemove: (): void => {
        drawElement.parentNode?.removeChild(drawElement);
      },
    };
    this.app.attachView(drawComponent.hostView);
    mapboxMap.addControl(drawControl as unknown as IControl, 'top-right');
  }

  private toggleMapInteractions(enable: boolean): void {
    if (!this.mapboxMap) return;
    if (enable) {
      this.mapboxMap.boxZoom.enable();
      this.mapboxMap.doubleClickZoom.enable();
      this.mapboxMap.dragPan.enable();
      this.mapboxMap.dragRotate.enable();
      this.mapboxMap.keyboard.enable();
      this.mapboxMap.scrollZoom.enable();
      this.mapboxMap.touchZoomRotate.enable();
    } else {
      this.mapboxMap.boxZoom.disable();
      this.mapboxMap.doubleClickZoom.disable();
      this.mapboxMap.dragPan.disable();
      this.mapboxMap.dragRotate.disable();
      this.mapboxMap.keyboard.disable();
      this.mapboxMap.scrollZoom.disable();
      this.mapboxMap.touchZoomRotate.disable();
    }
  }

  public init(mapboxMap: MapboxMap, injector: EnvironmentInjector): void {
    this.mapboxMap = mapboxMap;
    this.mapboxDraw = this.initMapboxDraw(mapboxMap);
    this.initDrawControl(mapboxMap, injector);
  }

  public changeDrawMode(drawMode: 'select' | 'freehand'): void {
    if (!this.mapboxDraw) {
      return;
    }
    if (drawMode === 'select') {
      this.toggleMapInteractions(true);
    }
    if (drawMode === 'freehand') {
      this.toggleMapInteractions(false);
    }
    this.mapboxDraw.changeMode(drawMode as keyof typeof this.mapboxDraw.modes);
  }
}
