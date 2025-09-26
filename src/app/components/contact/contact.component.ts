import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email = 'your.email@example.com';
  linkedin = 'https://www.linkedin.com/in/yourprofile';
  github = 'https://github.com/yourname';

  constructor(private seo: SeoService) {}
  ngOnInit() {
    this.seo.updateMeta('Contact — Malaka Senanayake', 'Get in touch with Malaka — email or social media links.');
  }
}
