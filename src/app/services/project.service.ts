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
      title: 'PayTrack',
      description: 'Web-based micro-service application designed to manage outstanding invoices for multiple clients. The system streamlines invoice tracking, automates reminders, and provides clear dashboards for payment statuses. It helps businesses stay on top of their accounts receivable, reduces manual effort, and ensures smooth financial operations across multiple clients.',
      image: 'assets/project_images/payTrack.jpg',
      tags: ['Java 17','Spring Boot','MySQL','micro-services','Angular'],
      category: 'web',
      docsUrl: '#'
    },
    {
      id: 2,
      title: 'OMS 3.0 - Outstanding Management System',
      description: 'Developed a JavaFX desktop application to simplify and automate outstanding invoice tracking for Kevilton distributors. The solution improved visibility, reduced manual effort, and helped the finance team manage payments more efficiently.',
      image: 'assets/project_images/oms_3.png',
      tags: ['JavaFx','Java (Java SE)','MySQL','JasperReports'],
      category: 'web',
      docsUrl: '#'
    },
    {
      id: 3,
      title: 'Modjoul – IoT Safety & Analytics Platform',
      description: 'Contributed to the development and deployment of an IoT-based employee safety and analytics solution at Virtusa. I was directly involved in creating and managing the AWS cloud environment, ensuring scalable and secure infrastructure to support real-time IoT data processing and analytics.',
      image: 'assets/project_images/modjoul.png',
      tags: ['AWS','Angular','Node.js','Python','Java'],
      category: 'mobile',
      liveUrl: 'https://modjoul.com'
    },
    {
      id: 4,
      title: 'KnitCAD - Knitting machine tool',
      description: 'Designed and developed a smart application to create knitting patterns and export them as CSV files for automated production. Integrated Arduino and PLC controllers to interpret design data and control the knitting process seamlessly. This project highlights my skills in embedded systems, automation, and software–hardware integration.',
      image: 'assets/project_images/KnitCAD.png',
      tags: ['Java (Java SE)','MySQL'],
      category: 'api',
      repoUrl: '#',
      docsUrl: '#'
    },
    {
      id: 5,
      title: 'CodePilot - SLCD',
      description: 'I contributed to developing a code analysis tool at JAIT that helps developers identify code quality issues, maintain clean architecture, and improve overall productivity. The tool provided real-time insights and suggestions, making it easier for teams to write cleaner, more efficient, and maintainable code.',
      image: 'assets/project_images/CodePilot.PNG',
      tags: ['Java 17','Spring Boot','Python','Angular','Docker','PostgreSQL'],
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
