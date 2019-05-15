import {Poder} from './Poder';

export class Vengador{
  id:number;
  nombre:string;
  descripcion:string;
  poderes: Poder [] = [];

  constructor(nombre,poderes){
    this.nombre = nombre;
    this.poderes = poderes;
  }
}
