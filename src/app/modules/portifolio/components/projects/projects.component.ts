import { Component, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public arrayProject = signal<IProject[]>([
    {
      src:'../../../../../assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      with: '100px',
      height:'51px',
      description: '<p>aqui seria a descricao do projeto</p>',
      links:[
        {
          name: 'conheca o blog',
          href: 'www.google.com'
        },
      ]

    }
  ]);

  }

