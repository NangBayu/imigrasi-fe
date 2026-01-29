import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';
import { PegawaiComponent } from './pages/pegawai/pegawai.component';
import { DashboardComponent } from './pages/pegawai/dashboard/dashboard.component';
import { PenggunaComponent } from './pages/pengguna/pengguna.component';
import { RiwayatComponent } from './pages/pengguna/riwayat/riwayat.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'kelola-akun',
        component: AdminComponent,
        canActivate: [RoleGuard],
        data: { role: 'admin' },
      },
      {
        path: 'approval',
        component: PegawaiComponent,
        canActivate: [RoleGuard],
        data: { role: 'pegawai' },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [RoleGuard],
        data: { role: 'pegawai' },
      },
      {
        path: 'permohonan',
        component: PenggunaComponent,
        canActivate: [RoleGuard],
        data: { role: 'pengguna' },
      },
      {
        path: 'riwayat',
        component: RiwayatComponent,
        canActivate: [RoleGuard],
        data: { role: 'pengguna' },
      },
    ],
  },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
