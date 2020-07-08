import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { AddListingComponent } from './add/add-listing.component';
import { ListingListComponent } from './list/listing-list.component';
import { ViewListingComponent } from './view/view-listing.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzPageHeaderModule, NzButtonModule, NzIconModule, NzListModule, NzMessageServiceModule, NzAvatarModule, NzPaginationModule, NzSpinModule, NzFormModule, NzTableModule, NzInputModule, NzEmptyModule, NzDescriptionsModule, NzAlertModule, NzSelectModule, NzLayoutModule, NzGridModule, NzSwitchModule, NzRadioModule, NzUploadModule, NzModalModule, NzPopconfirmModule, NzMessageModule, NzDatePickerModule, NzCheckboxModule, NzCarouselModule, NzCardModule, NzMenuModule, NzDropDownModule, NzToolTipModule, NzDividerModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [AddListingComponent, ListingListComponent, ViewListingComponent],
  imports: [
    CommonModule,
    ListingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzIconModule,
    NzListModule,
    NzMessageModule,
    NzAvatarModule,
    NzPaginationModule,
    NzSpinModule,
    NzTableModule,
    NzInputModule,
    NzEmptyModule,
    NzDescriptionsModule,
    NzAlertModule,
    NzSelectModule,
    NzFormModule,
    NzLayoutModule,
    NzGridModule,
    NzSwitchModule,
    NzRadioModule,
    NzUploadModule,
    NzModalModule,
    NzPopconfirmModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzCarouselModule,
    NzCardModule,
    NzMenuModule,
    NzDropDownModule,
    NzToolTipModule,
    NzDividerModule,
  ]
})
export class ListingModule { }
