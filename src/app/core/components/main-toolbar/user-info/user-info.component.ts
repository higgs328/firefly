import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCard,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UserInfo } from 'firebase/auth';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
  ],
  selector: 'app-user-info',
  standalone: true,
  styleUrl: './user-info.component.scss',
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent {
  public showUserInfo = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  get user(): UserInfo | null {
    return this.userService.user();
  }

  get hasUserInfo(): boolean {
    return !!this.user;
  }

  toggleUserInfo(): void {
    this.showUserInfo = !this.showUserInfo;
  }

  logout(): void {
    this.showUserInfo = false;
    this.userService.clear();
    this.authService.logout();
  }
}
