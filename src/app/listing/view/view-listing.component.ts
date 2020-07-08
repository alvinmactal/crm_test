import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.scss']
})
export class ViewListingComponent implements OnInit {

  listing: any;
  imagesURL = ['https://i.ibb.co/k9qzzXd/image1.jpg', 'https://i.ibb.co/B3WRKxg/image2.jpg', 'https://i.ibb.co/VMbJphx/image3.jpg', 'https://i.ibb.co/jRv657R/image4.jpg', 'https://i.ibb.co/56czCyK/image5.jpg'];
  constructor() { }

  ngOnInit(): void {
    let data = localStorage.getItem('listing');
    this.listing = JSON.parse(data);
    
  }

}
