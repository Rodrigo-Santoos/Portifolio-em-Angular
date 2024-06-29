import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperience[]>([
    {
      summary:{
        strong: "Desenvolvedor Java",
        p:"testando aqui"
      },
      text: "<p>testando aqui para poder ver se esta funcionando</p>"
    },
    {
      summary:{
        strong: "Desenvolvedor Angular",
        p:"testando aqui"
      },
      text: "<p>testando aqui para poder ver se esta funcionando</p>"
    },
    {
      summary:{
        strong: "Desenvolvedor C#",
        p:"testando aqui"
      },
      text: "<p>testando aqui para poder ver se esta funcionando</p>"
    },
  ])
}
