import { FirebaseOptions } from 'firebase/app';

export interface FirebaseConfig extends FirebaseOptions {
  apiKey: FirebaseOptions['apiKey'];
  appId: FirebaseOptions['appId'];
  authDomain: FirebaseOptions['authDomain'];
  measurementId: FirebaseOptions['measurementId'];
  messagingSenderId: FirebaseOptions['messagingSenderId'];
  projectId: FirebaseOptions['projectId'];
  storageBucket: FirebaseOptions['storageBucket'];
}
