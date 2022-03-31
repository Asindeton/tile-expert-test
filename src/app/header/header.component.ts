import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

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
  public searchInputFocus = false;
  public showInfoWrapper = true;

  @ViewChild('search')
  search!: ElementRef;
  @ViewChild('headerWrapper')
  headerWrapper!: ElementRef;

  ngOnInit(): void {
    this.getWidthFromWindow();
  }

  @HostListener('window:resize', ['$event'])
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
  public searchFieldToggle(event: Event) {
    if (this.search.nativeElement == event.target) {
      this.searchFieldIsActive = true;
      if (this.isMobile && this.searchFieldIsActive) {
        this.showInfoWrapper = false;
      }
    }
    if (this.headerWrapper.nativeElement == event.target) {
      this.searchFieldIsActive = false;
      this.searchInputFocus = false;
      this.showInfoWrapper = true;
    }
  }
  public inputFocus() {
    this.searchInputFocus = true;
  }
}
