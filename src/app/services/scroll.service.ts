import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private headerOffset = 70; // match header height

  scrollTo(id: string) {
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - this.headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

