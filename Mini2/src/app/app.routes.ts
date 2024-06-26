import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { DescubreComponent } from './componentes/descubre/descubre.component';
import { RegistrosComponent } from './componentes/registros/registros.component';
import { CasaunicaComponent } from './componentes/casaunica/casaunica.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { ReservasComponent } from './componentes/reservas/reservas.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { HFavComponent } from './componentes/hfav/hfav.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'descubre' ,component: HomeComponent},
    {path: 'about' ,component: AboutComponent},
    {path: 'casaunica/:id', component: CasaunicaComponent},
    {path: 'home', component: DescubreComponent},
    {path: 'registros',component: RegistrosComponent},
    {path: 'buscador/:nombreh', component: BuscadorComponent},
    {path: 'calendario',component: CalendarioComponent},
    {path: 'reportes',component: ReportesComponent},

    {path: 'reserva/:ids', component: ReservasComponent},
    {path: 'hfav/:tipo', component: HFavComponent}
];
