import { Injectable } from '@angular/core';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import type { Feature, FeatureCollection } from 'geojson';
import { Map as MapboxMap } from 'mapbox-gl';
import { BehaviorSubject, Observable } from 'rxjs';

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

  get featureCollection$(): Observable<FeatureCollection> {
    return this.features$.asObservable();
  }

  init(map: MapboxMap, options?: MapboxDraw.MapboxDrawOptions): void {
    this.map = map;
    this.draw = new MapboxDraw(
      options || {
        controls: {
          combine_features: false,
          line_string: true,
          point: true,
          polygon: true,
          trash: true,
          uncombine_features: false,
        },
        displayControlsDefault: false,
      },
    );

    this.map.addControl(this.draw);

    // Subscribe to draw events
    map.on('draw.create', () => this.updateFeatureCollection());
    map.on('draw.update', () => this.updateFeatureCollection());
    map.on('draw.delete', () => this.updateFeatureCollection());
  }

  private updateFeatureCollection(): void {
    const data = this.draw.getAll();
    this.features$.next(data);
  }

  addFeature(feature: Feature): void {
    this.draw.add(feature);
  }

  getFeatures(): FeatureCollection {
    return this.draw.getAll();
  }

  loadFeatures(collection: FeatureCollection): void {
    this.draw.set(collection);
    this.features$.next(collection);
  }

  clearFeatures(): void {
    this.draw.deleteAll();
    this.features$.next({ features: [], type: 'FeatureCollection' });
  }

  destroy(): void {
    if (this.map && this.draw) {
      this.map.removeControl(this.draw);
    }
  }
}
