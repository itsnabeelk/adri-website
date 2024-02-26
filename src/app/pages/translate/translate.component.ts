import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements AfterViewInit {
  isLoading: boolean = false;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    document.querySelector("html")?.classList.add('js');

    const fileInput = document.querySelector(".input-file") as HTMLInputElement;
    const button = document.querySelector(".input-file-trigger") as HTMLButtonElement;
    const the_return = document.querySelector(".file-return") as HTMLDivElement;
    const submitButton = document.querySelector(".submit-button") as HTMLButtonElement;

    if (fileInput && button && the_return && submitButton) {
      button.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          fileInput.click();
        }
      });

      button.addEventListener("click", (event: Event) => {
        fileInput.click();
        event.preventDefault();
      });

      fileInput.addEventListener("change", (event: Event) => {
        const files = (event.target as HTMLInputElement).files;
        if (files && files.length > 0) {
          the_return.innerHTML = files[0].name;
        } else {
          the_return.innerHTML = "No file selected";
        }
      });

      submitButton.addEventListener("click", (event: Event) => {
        event.preventDefault();
        this.isLoading = true; // Activate the loading state

        // Simulate a delay for demonstration purposes
        setTimeout(() => {
          this.isLoading = false; // Deactivate the loading state
          this.router.navigate(['/translate-price']); // Navigate to the next page
        }, 2000); // Replace this with your actual submission logic
      });
    }
  }
}