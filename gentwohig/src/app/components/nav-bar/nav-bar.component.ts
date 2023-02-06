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


  public openCloseNav() {
    this.openFullNavToggle = !this.openFullNavToggle;
    const navManuEl = document.getElementById("navMenu");
    console.log(navManuEl)
    if(this.openFullNavToggle) {
      navManuEl!.style.width = "100%";
    }
    if(!this.openFullNavToggle) {
      navManuEl!.style.width = "0%";
    }
  }

}
