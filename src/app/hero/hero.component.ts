import { Component, Renderer2, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { LogikService } from '../logik.service';
import { NgxTypedWriterModule } from 'ngx-typed-writer';

@Component({
  selector: 'app-hero',
  imports: [NgxTypedWriterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  constructor(private renderer: Renderer2, public logik: LogikService) {
  }

  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('close') close!: ElementRef;
  @Output() toggleNavbar = new EventEmitter<boolean>();


  toggleHamburgerBtn() {
    if (this.logik.hamburgerBtn == 1) {
      this.renderer.setStyle(this.logik.navbar.nativeElement, 'left', '0px')
      //this.toggleNavbar.emit(true);

      this.logik.hamburgerBtn = 0;
    }
    else {
      this.renderer.setStyle(this.logik.navbar.nativeElement, 'left', '-300px')

      //this.toggleNavbar.emit(false);
      this.logik.hamburgerBtn = 1;
    }
  }
}
