import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddListingComponent } from './add/add-listing.component';
import { ViewListingComponent } from './view/view-listing.component';


const routes: Routes = [ { path: '', component: AddListingComponent },
{ path: 'add', component: AddListingComponent },
{ path: 'view', component: ViewListingComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
