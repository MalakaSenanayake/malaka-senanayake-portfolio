import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBarComponent } from '../skill-bar/skill-bar.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillBarComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'Angular', level: 90 },
    { name: 'TypeScript', level: 92 },
    { name: 'RxJS', level: 80 },
    { name: 'Node.js', level: 78 },
    { name: 'Testing', level: 75 }
  ];

  constructor(private seo: SeoService) {}
  ngOnInit() {
    this.seo.updateMeta('Skills — Malaka Senanayake', 'Technical skills: Angular, TypeScript, Node.js, RxJS and more.');
  }
}
