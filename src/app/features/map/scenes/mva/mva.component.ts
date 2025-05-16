import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapComponent } from '../../components/map.component';

@Component({
  imports: [MapComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-mva-scene',
  standalone: true,
  styleUrl: './mva.component.scss',
  templateUrl: './mva.component.html',
})
export class MVASceneComponent {}
