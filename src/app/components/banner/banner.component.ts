import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('450ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class BannerComponent {
  constructor(private seo: SeoService) { }
  ngOnInit() {
    this.seo.updateMeta('Malaka Senanayake — Software Engineer', 'Full-stack engineer. I build thoughtful, maintainable, and scalable web applications.');
  }
}
