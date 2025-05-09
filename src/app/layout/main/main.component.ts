import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MainPanelComponent } from '../../core/components/main-panel/main-panel.component';
import { MainToolbarComponent } from '../../core/components/main-toolbar/main-toolbar.component';

@Component({
  imports: [
    CommonModule,
    MainPanelComponent,
    MainToolbarComponent,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
  ],
  selector: 'app-layout',
  standalone: true,
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainLayoutComponent {}
