import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogikService {

  constructor() { }

  navbar!: ElementRef;

  hamburgerBtn = 1;
}
