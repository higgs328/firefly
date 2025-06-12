import {
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  Injectable,
} from '@angular/core';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import type { Feature, FeatureCollection } from 'geojson';
import { IControl, Map as MapboxMap } from 'mapbox-gl';
import { BehaviorSubject, Observable } from 'rxjs';
import { DrawComponent } from '../../features/map/components/draw/draw.component';

@Injectable({
  providedIn: 'root',
})
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

  public init(map: MapboxMap, injector: EnvironmentInjector): void {
    this.map = map;
    const drawElement = document.createElement('div');
    const drawComponent: ComponentRef<DrawComponent> = createComponent(
      DrawComponent,
      {
        environmentInjector: injector,
      },
    );
    drawElement.appendChild(drawComponent.location.nativeElement);
    this.addControl(drawElement);
  }

  private addControl(drawElement: HTMLDivElement): void {
    const drawControl = {
      onAdd: (): HTMLDivElement => {
        return drawElement;
      },
      onRemove: (): void => {
        if (drawElement.parentNode) {
          drawElement.parentNode.removeChild(drawElement);
        }
      },
    };
    this.map.addControl(drawControl as unknown as IControl, 'top-right');
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
