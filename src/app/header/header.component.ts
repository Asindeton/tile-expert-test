import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logoTitle = 'Tile.Expert';
  public isMobile = false;
  public innerWidth: any;
  public activeBurger = false;
  public searchFieldIsActive = false;
  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.getWidthFromWindow();
  }
  onResize() {
    this.getWidthFromWindow();
  }

  private getWidthFromWindow() {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth <= 950) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
  public burgerMenuToggle() {
    this.activeBurger = !this.activeBurger;
  }
  public searchFieldToggle() {
    this.searchFieldIsActive = !this.searchFieldIsActive;
  }
}
