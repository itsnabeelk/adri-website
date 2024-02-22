import { Component } from '@angular/core';
declare function scriptJs(): void;
declare function hScroll(): void;
declare function gsapScript(): void;
@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrl: './pre-loader.component.css'
})
export class PreLoaderComponent {
  ngOnInit(): void {
    scriptJs()
    gsapScript()
    hScroll()
  }
}
