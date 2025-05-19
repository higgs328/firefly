import { initializeApp } from 'firebase-admin/app';
import { credential } from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

// 1. Initialize Firebase Admin SDK.
var serviceAccount = require('./serviceAccountKey.json');
initializeApp({
  credential: credential.cert(serviceAccount),
});
const db = getFirestore();

// 2. Read data.
const raw = readFileSync('./tools/import/trails.json', 'utf-8');
const data = JSON.parse(raw);

// 3. Create documents.
const parsedTrails = data.features.map((feature: any, index: number) => {
  const id = `trail-${index + 1}`;
  const geojson = JSON.stringify({
    type: 'Feature',
    geometry: {
      coordinates: feature.geometry.paths,
      type: 'MultiLineString',
    },
    properties: {
      ...feature.attributes,
    },
  });
  return { id, geojson };
});

// 4. Upload documents.
async function upload() {
  const batch = db.batch();
  for (const { id, geojson } of parsedTrails) {
    const docRef = db.doc(`trails/${id}`);
    batch.set(docRef, { geojson });
  }
  await batch.commit();
}
upload().catch(console.error);
