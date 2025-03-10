import { Component, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component'
import { SkillsComponent } from './skills/skills.component'
import { ResumeComponent } from './resume/resume.component'
import { ProjectsComponent } from './projects/projects.component'
import { ContactComponent } from './contact/contact.component'


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, SkillsComponent, ResumeComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('backtoheaderBtn') backtoheaderBtn!: ElementRef;

  constructor(private renderer: Renderer2) {}

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
