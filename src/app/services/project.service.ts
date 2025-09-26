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
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1674&q=80',
      tags: ['React','Node.js','MongoDB','Stripe API'],
      category: 'web',
      repoUrl: '#',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A mobile application for task management with real-time synchronization and offline capabilities.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1674&q=80',
      tags: ['React Native','Firebase','Redux'],
      category: 'mobile',
      repoUrl: '#'
    },
    {
      id: 3,
      title: 'Weather API Service',
      description: 'A RESTful API for weather data with caching, rate limiting, and multiple data source integration.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1674&q=80',
      tags: ['Node.js','Express','Redis','JWT'],
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
