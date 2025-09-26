import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  constructor(private scroll: ScrollService) {}

  goToProjects() {
    this.scroll.scrollTo('projects');
  }

  goToContact() {
    this.scroll.scrollTo('contact');
  }
}
