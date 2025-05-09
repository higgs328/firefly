import { Component } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchComponent } from './search/search.component';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  imports: [
    MatAutocompleteModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SearchComponent,
    UserInfoComponent,
  ],
  selector: 'app-main-toolbar',
  standalone: true,
  styleUrl: './main-toolbar.component.scss',
  templateUrl: './main-toolbar.component.html',
})
export class MainToolbarComponent {}
