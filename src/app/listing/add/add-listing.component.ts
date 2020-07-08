import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.less']
})
export class AddListingComponent implements OnInit {

  isCollapsed = true;

  profile: any;
  isLoggedIn = false;
  pageLoader = false;
  formSpinner = false;
  error: string = null;
  year: any;
  notificationList: any = [];
  unreadNotifications = 0;
  pageHeader: any;
  listingForm: any;
  frequencyList = ['Montly', 'Quarterly', 'Yearly'];
  agentList = ['Agent 1', 'Agent 2', 'Agent 3'];
  chequesList = [];
  cityLists = ['Abu Dhabi', 'Dubai', 'Ajman', 'Fujairah', 'Ras al Khaimah', 'Sharjah ', 'Umm al Quwain'];
  locationList = ['Community 1', 'Community 2', 'Community 3', 'Community 4'];
  sublocationList = ['Sub Community 1', 'Sub Community 2', 'Sub Community 3', 'Sub Community 4'];
  bathsList = [];
  bedsList = [];
  parkingList = [];
  featuresList = ["Balcony", 'Community View', 'Beach View', 'Garden', 'Pool', 'Storage Room', 'Terrace Area', 'Walk-in Closet', 'Wood Flooring', 'Fully Fitted Kitchen', 'Golf Course View' , 'Marble Flooring'];
  selectedFeatures = [];
  portalList = ['Property Finder', 'Dubizzle', 'Bayut', 'Own Site', 'Generic XML'];
  furnishedList = ['Furnished', 'Semi Furnished', 'Fitted', 'Fully Fitted'];
  selectedPortals = [];
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.listingForm = new FormGroup({
      agent: new FormControl(),
      expiry_date: new FormControl('', Validators.required),
      category_id: new FormControl('', Validators.required),
      beds: new FormControl(''),
      baths: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      sub_location: new FormControl({ value: '', disabled: false }),
      unit_no: new FormControl('', [Validators.required]),
      type: new FormControl(''),
      street_no: new FormControl(''),
      floor: new FormControl(''),
      build_up_area: new FormControl('', Validators.required),
      view: new FormControl('', Validators.required),
      furnished: new FormControl(''),
      parking: new FormControl(''),
      price: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d*(\.\d{1,6})?$/)
      ])),
      price_per_sq_feet: new FormControl('', Validators.pattern(/^\d*(\.\d{1,6})?$/)),
      frequency: new FormControl('Yearly'),
      cheques: new FormControl(''),
      deposit: new FormControl('', Validators.pattern(/^\d*(\.\d{1,6})?$/)),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      portals: new FormGroup({}),
      features: new FormGroup({}),
      amenities: new FormControl([]),
      virtual_tour_url: new FormControl(''),
      commission: new FormControl(''),
      notes: new FormControl(''),
      status: new FormControl('')
    });

    for(let x = 1; x < 13; x++ ) {
      this.bedsList = [...this.bedsList, x + ' Beds'];
      this.bathsList = [...this.bathsList, x + ' Baths'];
      this.parkingList = [...this.parkingList, x + ' Parkings'];
      this.chequesList = [...this.chequesList, x + ' Cheques'];
    }
    if(this.listingForm) {
      for(let x = 0; x < this.featuresList.length; x++ ) {
        let a = this.listingForm.get('features').addControl(x, new FormControl(false));
      }

      for(let x = 0; x < this.portalList.length; x++ ) {
        let a = this.listingForm.get('portals').addControl(x, new FormControl(false));
      }
    
    }

  }


  public save() {

    let listing = JSON.parse(JSON.stringify(this.listingForm.value));
    listing.portals = this.selectedPortals;
    listing.features = this.selectedFeatures;
    localStorage.setItem('listing', JSON.stringify(listing));
    // this.router.navigate(['/listing/view']);
    
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/listing/view'])
    );
  
    window.open(url, '_blank');

  }

  public checkboxSelected($event, item) {
    if($event === true) {
      this.selectedFeatures.push(item);
    } else {
      this.selectedFeatures = this.selectedFeatures.filter(e => e != item);
    }
  }

  public portalSelected($event, item) {
    if($event === true) {
      this.selectedPortals.push(item);
    } else {
      this.selectedPortals = this.selectedPortals.filter(e => e != item);
    }
  }

  public toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  public logout() {
  }

  private getNotifications() {
   
  }

  public getUnreadNotifications() {
    
  }

  public markNotifIsRead(item) {
   
  }

  public routeToPage(item: any) {
    
  }

  public markAllNotifIsRead() {
   
  }

}
