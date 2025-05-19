// core/services/trail.service.ts
import { Injectable, inject } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import type { Feature, MultiLineString } from 'geojson';
import { Observable, map } from 'rxjs';

export interface TrailRecord {
  geojson: string;
  id: string;
}

@Injectable({ providedIn: 'root' })
export class TrailService {
  private firestore = inject(Firestore);
  private trailsRef = collection(this.firestore, 'trails');

  getTrails(): Observable<Feature<MultiLineString>[]> {
    return collectionData(this.trailsRef, { idField: 'id' }).pipe(
      map((docs) =>
        (docs as TrailRecord[]).map(
          (doc) => JSON.parse(doc.geojson) as Feature<MultiLineString>,
        ),
      ),
    );
  }
}
