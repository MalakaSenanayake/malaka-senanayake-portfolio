import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { SeoService } from '../../services/seo.service';
import { trigger, transition, style, animate } from '@angular/animations';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string; // demo could be youtube link
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('listIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(8px)' }),
        animate('420ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Project A — Dashboard',
      description: 'Admin dashboard with charts, role-based auth and realtime updates.',
      tech: ['Angular', 'RxJS', 'NgRx', 'D3'],
      github: 'https://github.com/yourname/project-a',
      demo: 'https://www.youtube.com/watch?v=EXAMPLE'
    },
    {
      title: 'Project B — E-commerce',
      description: 'Headless e-commerce with serverless cart and stripe checkout.',
      tech: ['Angular', 'Node.js', 'Stripe'],
      github: 'https://github.com/yourname/project-b',
      demo: 'https://www.youtube.com/watch?v=EXAMPLE2'
    }
  ];

  constructor(private seo: SeoService) {}
  ngOnInit() {
    this.seo.updateMeta('Projects — Malaka Senanayake', 'Selected projects: dashboards, e-commerce, integrations and more.');
  }
}
