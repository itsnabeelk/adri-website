import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const contentElements = Array.from(document.getElementsByClassName('content-banner'));

    if (contentElements.length > 1) {
      let currentIndex = 0;

      setInterval(() => {
        const currentElement = contentElements[currentIndex];
        const nextIndex = (currentIndex + 1) % contentElements.length;
        const nextElement = contentElements[nextIndex];

        currentElement.classList.remove('slide-in');
        currentElement.classList.add('slide-out');
        nextElement.classList.remove('slide-out');
        nextElement.classList.add('slide-in');

        currentIndex = nextIndex;
      }, 5000);
    }
  }
}