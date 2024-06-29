import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Icone de conhecimento de Java'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento de HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento de Java'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento de Java'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Icone de conhecimento de Java'
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Icone de conhecimento de Java'
    },
    {
      src: 'assets/icons/knowledge/unity.svg',
      alt: 'Icone de conhecimento de Java'
    },
  ])
}
