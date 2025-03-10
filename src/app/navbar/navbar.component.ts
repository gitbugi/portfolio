import { Component, Input, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { LogikService } from '../logik.service'

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    @Input() NavbarInput: boolean = false;
    @ViewChild('navbar') navbar!: ElementRef;

    constructor(private renderer: Renderer2, private logik: LogikService) {}

    ngAfterViewInit(){
      this.logik.navbar = this.navbar;
    }

    onResize(event: any) {
      if(event.target.innerWidth >= 1000){
        this.renderer.setStyle(this.navbar.nativeElement, "left", "0px")
        this.logik.hamburgerBtn = 0;
      } else {
        this.renderer.setStyle(this.navbar.nativeElement, "left", "-300px")
        this.logik.hamburgerBtn = 1;
      }
    }

    changeSection(){
      if(window.innerWidth >= 1000){
        this.renderer.setStyle(this.navbar.nativeElement, "left", "0px")
        this.logik.hamburgerBtn = 0;
      } else {
        this.renderer.setStyle(this.navbar.nativeElement, "left", "-300px")
        this.logik.hamburgerBtn = 1;
      }
    }
}
