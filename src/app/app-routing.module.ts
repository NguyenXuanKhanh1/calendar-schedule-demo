import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { CustomScheduleComponent } from './custom-schedule/custom-schedule.component';


const routes: Routes = [
  {path: 'demo', component: DemoComponent},
  {path: 'custom', component: CustomScheduleComponent},
  {path: '', redirectTo: 'demo', pathMatch: 'full'},
  {path: '**', redirectTo: 'demo', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
