import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCardModule,
  MatCardHeader,
  MatCardContent,
  MatCardTitle,
  MatCardActions,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardActions,
    MatIcon,
  ],
  selector: 'app-login',
  standalone: true,
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  login(): void {
    this.authService.login();
  }
}
