import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { FooterComponent } from '../basics/footer/footer.component';
import { HeaderComponent } from '../basics/header/header.component';
const appRoutes: Routes = [
  {
    path:'hoge',
    component: AppComponent,
  },
  {
    path:'header',
    component: HeaderComponent,
  },
  {
    path:'footer',
    component: FooterComponent,
  },
]
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{}
