import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public openFullNavToggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public animation(buttonState: boolean) {
    const button = document.getElementById("newHamNav") as HTMLElement;
    if (buttonState) {
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("aria-expanded", "false");
    }
  }


  public openCloseNav() {
    this.openFullNavToggle = !this.openFullNavToggle;
    this.animation(this.openFullNavToggle)
    const navManuEl = document.getElementById("navMenu");
    if (this.openFullNavToggle) {
      navManuEl!.style.width = "100%";
    }
    if (!this.openFullNavToggle) {
      navManuEl!.style.width = "0%";
    }
  }

}
