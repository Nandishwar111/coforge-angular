import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { LoginComponent } from './home/login/login.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { TeamComponent } from './team/team.component';
import { ParentComponent } from './parent/parent.component';
import { TraineeComponent } from './trainee/trainee.component';
import { AuthenticationComponent } from './authentication/authentication.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutusComponent},
    {path:'emp',component:EmployeeComponent},
    {path:'pipes',component:PipesdemoComponent},
    {path:'login',component:LoginComponent},
    {path:'contact',component:ContactComponent},
    {path:'det',component:DetailsComponent},
    {path:'team',component:TeamComponent},
    {path:'parent',component:ParentComponent},
    {path:'trainee',component:TraineeComponent},
    {path:'auth',component:AuthenticationComponent}


];
