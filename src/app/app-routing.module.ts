import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalEComponent } from './Pages/menu-principal-e/components/menu-principal-e.component';
import { GruposComponent } from './Pages/grupos/components/grupos.component';

const routes: Routes = [
  { path: 'pages/menu-principal-e', component: MenuPrincipalEComponent },
  { path: 'pages/grupos', component: GruposComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
