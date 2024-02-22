import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  navigateToLink(route: string) {
    console.log('Navigating to:', route);
    this.router.navigate([route]);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }
}