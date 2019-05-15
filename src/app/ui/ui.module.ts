import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminPoderComponent } from '../admin-poder/admin-poder.component';
import { AdminAvengerComponent } from '../admin-avenger/admin-avenger.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent,AdminAvengerComponent,
  AdminPoderComponent,HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'adminAvenger',component:AdminAvengerComponent},
      {path:'adminPoder',component:AdminPoderComponent},
      {path: 'home', component:HomeComponent},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    FormsModule
  ],
  exports:[
    LayoutComponent
  ]
})
export class UiModule { }
