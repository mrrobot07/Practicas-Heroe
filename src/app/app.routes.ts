import { RouterModule , Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component'; 
import { HeroeBuscadoComponent } from './components/heroe-buscado/heroe-buscado.component';



const ROUTES : Routes = 
[
    { path: 'home', component:HomeComponent },
    { path: 'heroes', component: HeroesComponent},
    { path: 'about', component:AboutComponent},
    { path: 'heroe/:id', component:HeroeComponent},
    { path: 'heroe-buscado/:cadena', component:HeroeBuscadoComponent},
    { path: '**', pathMatch:'full', redirectTo:'home'}
]

export const APP_ROUTING = RouterModule.forRoot(ROUTES);