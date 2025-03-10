import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  
  ngOnInit(): void {
    AOS.init({
      duration: 1000
    });
  }
  
}
