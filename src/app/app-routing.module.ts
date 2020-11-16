import { noUndefined } from '@angular/compiler/src/util';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RegisterComponent } from './register/register.component';
import{AuthGuard} from './auth.guard'
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  {path:'' , redirectTo:'login',pathMatch:'full'},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent},
  {path:'recipe',canActivate:[AuthGuard],component:RecipeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'logout',canActivate:[AuthGuard],component:LogoutComponent},
  {path:'recipesDetails/:recipe_id',canActivate:[AuthGuard],component:RecipeDetailsComponent},
  {path:'**', component:NotfoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
