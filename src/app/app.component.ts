import { Component, ViewChild, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component'
import { SkillsComponent } from './skills/skills.component'
import { ProjectsComponent } from './projects/projects.component'
import { ContactComponent } from './contact/contact.component'


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild('backtoheaderBtn') backtoheaderBtn!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    localStorage.setItem('theme', 'dark');
  }

  backToHeader(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  @HostListener('window:scroll') onScroll(){
    if(window.scrollY < 700) {
      this.renderer.setStyle(this.backtoheaderBtn.nativeElement, "display", "none")
    } else {
      this.renderer.setStyle(this.backtoheaderBtn.nativeElement, "display", "flex")
    }
  }
}
