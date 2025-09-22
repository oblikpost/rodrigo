import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // Rota padrão: Redireciona para /home
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    // Rota da Home
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    // Rota de Login
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
  },
  {
    // Rota de Cadastro
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then(m => m.CadastroPage)
  },
  {
    // Rota do Dashboard (pós-login)
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage)
  },
];