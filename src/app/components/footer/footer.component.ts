// src/app/components/footer/footer.component.ts
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  constructor(private scroll: ScrollService) {}

  ngAfterViewInit(): void {
    // If you use the LinkedIn badge script included in index.html,
    // ask it to parse the DOM after view init (optional)
    const w: any = window;
    if (w.IN && typeof w.IN.parse === 'function') {
      w.IN.parse();
    }
  }

  navigateTo(id: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.scroll.scrollTo(id);
  }
}
