import { Component, OnInit } from '@angular/core';
import { Vengador} from 'src/models/Vengador';
import { Poder} from 'src/models/Poder';
import { DataServiceService } from '../Service/data-service.service';

@Component({
  selector: 'app-admin-avenger',
  templateUrl: './admin-avenger.component.html',
  styleUrls: ['./admin-avenger.component.css']
})
export class AdminAvengerComponent implements OnInit {

  poderes: Poder[]=[];
  poderSelected: Poder[] = [];
  vengador: Vengador;
  vengadores : Vengador[] = [];
  constructor(private data:DataServiceService) {
  }

  ngOnInit() {
    this.data.getPoderes().subscribe(listado => this.poderes = listado);
  }

  guardarVengador(nombre: any){
    console.log(this.poderSelected);
    this.vengador = new Vengador(nombre,this.poderSelected);
    console.log(this.vengador);
    let texto = "";
    for(let i=0;i<this.poderSelected.length;i++){
      texto += this.poderSelected[i].nombre;
      texto += ",";
    }
    alert("Se crea vengador:"+this.vengador.nombre+" Con los poderes:"+texto);
  }

  selectChange(evento){
    this.poderSelected.push(evento);
  }
}
