import { Component, OnInit } from '@angular/core';;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isCollapsed = true;

  profile: any;
  isLoggedIn = false;
  pageLoader = false;
  formSpinner = false;
  error: string = null;
  year: any;
  notificationList: any = [];
  unreadNotifications = 0;
 
  constructor(
    
  ) {
    this.year = (new Date()).getFullYear();
  }

  async ngOnInit() {
  
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
