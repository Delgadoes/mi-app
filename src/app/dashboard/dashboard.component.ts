import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Mi Aplicación</span>
      <span class="spacer"></span>
      <button mat-button (click)="logout()">Cerrar Sesión</button>
    </mat-toolbar>

    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Bienvenido, {{ userName }}!</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>Has iniciado sesión correctamente.</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 64px);
      background: #f5f5f5;
    }

    mat-card {
      width: 500px;
      padding: 40px;
      text-align: center;
    }

    mat-card-title {
      font-size: 28px;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      color: #666;
    }

    .spacer {
      flex: 1 1 auto;
    }
  `]
})
export class DashboardComponent implements OnInit {
  userName = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    this.userName = user?.name || 'Usuario';
  }

  logout(): void {
    this.authService.logout();
  }
}
