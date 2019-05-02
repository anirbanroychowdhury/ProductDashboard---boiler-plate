import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemInventoryComponent } from './item-inventory/item-inventory.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'item-inventory',component:ItemInventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
