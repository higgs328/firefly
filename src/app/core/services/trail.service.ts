import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  CollectionReference,
  collectionData,
} from '@angular/fire/firestore';
import { Feature, MultiLineString } from 'geojson';
import { Observable, map } from 'rxjs';

export interface TrailRecord {
  geojson: string;
  id: string;
}

@Injectable({ providedIn: 'root' })
export class TrailService {
  private firestore = inject(Firestore);
  private trailsRef: CollectionReference;
  public trails: Observable<Feature<MultiLineString>[]>;

  constructor() {
    this.trailsRef = collection(this.firestore, 'trails');
    this.trails = collectionData(this.trailsRef, { idField: 'id' }).pipe(
      map((docs) =>
        (docs as TrailRecord[]).map(
          (doc) => JSON.parse(doc.geojson) as Feature<MultiLineString>,
        ),
      ),
    );
  }
}
