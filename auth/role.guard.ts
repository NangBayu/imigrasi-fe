import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const user = this.auth.getCurrentUser();
    const role = route.data['role'];

    if (!user || user.role !== role) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
