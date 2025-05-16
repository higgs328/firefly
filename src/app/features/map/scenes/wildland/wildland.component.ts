import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapComponent } from '../../components/map.component';

@Component({
  imports: [MapComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-wildland-scene',
  standalone: true,
  styleUrl: './wildland.component.scss',
  templateUrl: './wildland.component.html',
})
export class WildlandSceneComponent {}
