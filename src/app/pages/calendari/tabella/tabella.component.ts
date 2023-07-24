import { Component, Input } from '@angular/core';
import { Evento } from 'src/app/models/evento.model';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.scss']
})
export class TabellaComponent {
  @Input() eventi! : Evento[];

  test : boolean = false;

  visibile(){
    this.test = !this.test;
  }

}
