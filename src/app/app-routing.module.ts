import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { SingleuserpageComponent } from './Pages/singleuserpage/singleuserpage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'singleuser', component: SingleuserpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
