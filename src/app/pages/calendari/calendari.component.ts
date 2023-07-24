import { Component } from '@angular/core';
import { Anno } from 'src/app/models/anno.model';

@Component({
  selector: 'app-calendari',
  templateUrl: './calendari.component.html',
  styleUrls: ['./calendari.component.scss']
})
export class CalendariComponent {

  anni : Anno[] = [
    {
      anno:2023,
      mesi: [
        {
          nome:"settembre",
          eventi: [
            {
              data : 1,
              giorno: "venerdi",
              orario: "19:00-21,00/21,00-23,00" ,
              partecipanti: [
              ] ,
            },
            {
              data : 4,
              giorno: "lunedi",
              orario: "19:00-21,00/21,00-23,00" ,
              partecipanti: [
              ] ,
            },
            {
              data : 5,
              giorno: "martedi",
              orario: "19:00-21,00/21,00-23,00" ,
              partecipanti: [
              ] ,
            },
            {
              data : 6,
              giorno: "mercoledi",
              orario: "19:00-21,00/21,00-23,00" ,
              partecipanti: [
              ] ,
            },
            {
              data : 8,
              giorno: "venerdi",
              orario: "19:00-21,00/21,00-23,00" ,
              partecipanti: [
              ] ,
            },
            {
              data : 11,
              giorno: "lunedi",
              orario: "19:00-21,00/21,00-23,00" ,
              partecipanti: [
              ] ,
            },
            {
              data : 12,
              giorno: "martedi",
              orario: "19:00-21,00/21,00-23,00" ,
              partecipanti: [
              ] ,
            },
            {
              data : 13,
              giorno: "mercoledi",
              orario: "19:00-21,00/21,00-23,00" ,
              partecipanti: [
              ] ,
            }
          ]
        }
      ] 
    }
  ]



}

