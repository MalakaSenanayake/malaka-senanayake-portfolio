import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // in-memory project list based on original HTML content
  private projects: Project[] = [
    {
      id: 1,
      title: 'Outstanding Management System',
      description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
      image: 'assets/project_images/oms_3.0.png',
      tags: ['JavaFx','Java (Java SE)','MySQL','JasperReports'],
      category: 'web',
      docsUrl: '#'
    },
    {
      id: 2,
      title: 'Modjoul AWS team',
      description: 'A mobile application for task management with real-time synchronization and offline capabilities.',
      image: 'assets/project_images/modjoul.png',
      tags: ['AWS','Angular','Node.js','Python','Java'],
      category: 'mobile',
      repoUrl: '#',
      liveUrl: 'https://modjoul.com'
    },
    {
      id: 3,
      title: 'KnitCAD',
      description: 'Designed and developed a smart application to create knitting patterns and export them as CSV files for automated production. Integrated Arduino and PLC controllers to interpret design data and control the knitting process seamlessly. This project highlights my skills in embedded systems, automation, and software–hardware integration.',
      image: 'assets/project_images/KnitCAD.jpg',
      tags: ['Java (Java SE)','MySQL'],
      category: 'api',
      repoUrl: '#',
      docsUrl: '#'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A analytics dashboard for social media management with data visualization and reporting features.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1674&q=80',
      tags: ['Vue.js','D3.js','Python','PostgreSQL'],
      category: 'web',
      repoUrl: '#',
      liveUrl: '#'
    }
  ];

  constructor() {}

  getProjects(): Project[] {
    // return copy
    return [...this.projects];
  }

  // optional: fetch remote projects (if wired to backend)
  // getProjects$(): Observable<Project[]> { ... }
}
