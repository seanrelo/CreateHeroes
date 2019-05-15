import { Component, OnInit } from '@angular/core';
import { Poder } from 'src/models/Poder';
import { DataServiceService } from '../Service/data-service.service';

@Component({
  selector: 'app-admin-poder',
  templateUrl: './admin-poder.component.html',
  styleUrls: ['./admin-poder.component.css']
})
export class AdminPoderComponent implements OnInit {

  lPoderes : Poder[] = [];
  constructor(private data:DataServiceService) { }

  ngOnInit() {
    this.data.getPoderes().subscribe(listado => this.lPoderes = listado);
  }

  crearPoder(poder:string){
    let poderTemp = new Poder(poder);
    //this.lPoderes.push(poderTemp);
    this.data.cambiarPoderes(poderTemp);
  }
}
