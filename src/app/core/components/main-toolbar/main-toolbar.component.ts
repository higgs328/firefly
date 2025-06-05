import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchComponent } from './search/search.component';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SearchComponent,
    UserInfoComponent,
  ],
  selector: 'app-main-toolbar',
  standalone: true,
  styleUrls: ['./main-toolbar.component.scss'],
  templateUrl: './main-toolbar.component.html',
})
export class MainToolbarComponent {
  protected iconSource$: Observable<string>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.iconSource$ = this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .pipe(
        map((result) =>
          result.matches ? 'img/brand_logo.png' : 'img/brand_name_logo.png',
        ),
      );
  }
}
