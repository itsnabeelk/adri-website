import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationError, NavigationCancel, NavigationStart, Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ADRI';

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.resetComponentState();
        this.scrollToTop();
      } else if (
        event instanceof NavigationError ||
        event instanceof NavigationCancel ||
        event instanceof NavigationStart
      ) {
        // Handle other navigation events as needed
      } else if (event instanceof Scroll) {
        if (event.position) {
          // Restore the scroll position if available
          this.viewportScroller.scrollToPosition(event.position);
        } else if (event.anchor) {
          // Scroll to the anchor element if available
          this.viewportScroller.scrollToAnchor(event.anchor);
        } else {
          // Scroll to the top of the page if no position or anchor is available
          this.scrollToTop();
        }
      }
    });
  }

  ngOnInit() {
    this.resetComponentState();
  }

  resetComponentState() {
    // Reset the component state and reload data as needed
    // This method should be implemented in your AppComponent
    // to reset any necessary properties or reload data from the server
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}