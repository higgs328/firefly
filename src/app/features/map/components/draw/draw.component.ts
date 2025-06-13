import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatButtonToggleChange,
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { DrawService } from '../../../../core/services/draw/draw.service';

@Component({
  imports: [CommonModule, MatButtonToggleModule, MatIconModule],
  selector: 'app-draw',
  standalone: true,
  styleUrl: './draw.component.scss',
  templateUrl: './draw.component.html',
})
export class DrawComponent {
  constructor(private drawService: DrawService) {}

  protected onToolChange(event: MatButtonToggleChange): void {
    this.drawService.changeDrawMode(event.value);
  }
}
