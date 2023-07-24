import { Component, Input } from '@angular/core';
import { Evento } from 'src/app/models/evento.model';
import { Mese } from 'src/app/models/mese.model';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.scss']
})
export class TabellaComponent {
  @Input() mese! : Mese;
  

  test : boolean = false;

  visibile(){
    console.log(this.mese)
    this.test = !this.test;
  }

}
