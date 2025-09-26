import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent implements OnInit {
  @Input() skill = '';
  @Input() level = 0;
  animatedWidth = 0;
  ngOnInit() {
    // small entrance animation
    setTimeout(() => this.animatedWidth = this.level, 120);
  }
}
