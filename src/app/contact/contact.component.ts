import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  sendMail(){
    window.location.href = "mailto:oezdemirbu@web.de?subject=&body=";
  }
}
