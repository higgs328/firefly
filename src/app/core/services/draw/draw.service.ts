import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  Injectable,
} from '@angular/core';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import type { Feature, FeatureCollection } from 'geojson';
import { IControl, Map as MapboxMap } from 'mapbox-gl';
import { BehaviorSubject, Observable } from 'rxjs';
import { DrawComponent } from '../../../features/map/components/draw/draw.component';
import FreehandMode from './modes/freehand.mode';
import SelectMode from './modes/select.mode';

@Injectable({ providedIn: 'root' })
export class DrawService {
  private draw!: MapboxDraw;
  private map!: MapboxMap;

  private features$ = new BehaviorSubject<FeatureCollection>({
    features: [],
    type: 'FeatureCollection',
  });

  public get featureCollection$(): Observable<FeatureCollection> {
    return this.features$.asObservable();
  }

  constructor(private app: ApplicationRef) {}

  public init(map: MapboxMap, injector: EnvironmentInjector): void {
    this.map = map;

    this.draw = new MapboxDraw({
      displayControlsDefault: false,
      modes: {
        ...MapboxDraw.modes,
        freehand: FreehandMode,
        select: SelectMode,
      } as Record<string, MapboxDraw.DrawCustomMode<object, object>>,
    });

    const drawParentDiv = document.createElement('div');
    const drawComponent: ComponentRef<DrawComponent> = createComponent(
      DrawComponent,
      {
        environmentInjector: injector,
      },
    );

    this.app.attachView(drawComponent.hostView);
    drawParentDiv.appendChild(drawComponent.location.nativeElement);
    this.map.addControl(this.draw);
    this.addControl(drawParentDiv);
  }

  private addControl(drawElement: HTMLDivElement): void {
    const drawControl = {
      onAdd: (): HTMLDivElement => drawElement,
      onRemove: (): void => {
        drawElement.parentNode?.removeChild(drawElement);
      },
    };
    this.map.addControl(drawControl as unknown as IControl, 'top-right');
  }

  public setMode(drawMode: 'select' | 'freehand' | 'simple_select'): void {
    if (!this.draw) {
      return;
    }
    this.draw.changeMode(drawMode as keyof typeof this.draw.modes);
  }

  private updateFeatureCollection(): void {
    const data = this.draw.getAll();
    this.features$.next(data);
  }

  public addFeature(feature: Feature): void {
    this.draw.add(feature);
  }

  public getFeatures(): FeatureCollection {
    return this.draw.getAll();
  }

  public loadFeatures(collection: FeatureCollection): void {
    this.draw.set(collection);
    this.features$.next(collection);
  }

  public clearFeatures(): void {
    this.draw.deleteAll();
    this.features$.next({ features: [], type: 'FeatureCollection' });
  }

  public destroy(): void {
    if (this.map && this.draw) {
      this.map.removeControl(this.draw);
    }
  }
}
