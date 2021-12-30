import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const contentRoutes: Routes = [
    { path: 'dashboard', loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'products', loadChildren: () => import('../../products/products.module').then(m => m.ProductsModule) },
    { path: 'sales', loadChildren: () => import('../../sales/sales.module').then(m => m.SalesModule) },
    { path: 'masters', loadChildren: () => import('../../masters/masters.module').then(m => m.MastersModule) },
    { path: 'users', loadChildren: () => import('../../users/users.module').then(m => m.UsersModule) },
    { path: 'reports', loadChildren: () => import('../../reports/reports.module').then(m => m.ReportsModule) },
    { path: 'settings', loadChildren: () => import('../../setting/setting.module').then(m => m.SettingModule) },
    { path: 'invoice', loadChildren: () => import('../../invoice/invoice.module').then(m => m.InvoiceModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(contentRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
