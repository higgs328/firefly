import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  selector: 'app-main-panel',
  styleUrl: './main-panel.component.scss',
  templateUrl: './main-panel.component.html',
})
export class MainPanelComponent {
  protected isExpanded = false;

  protected toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
}
