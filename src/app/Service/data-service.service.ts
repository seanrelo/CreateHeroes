import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Poder} from 'src/models/Poder';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private poderes : Poder[];
  private behavoir: BehaviorSubject<Poder[]>;
  constructor() {
    this.poderes= [];
    this.behavoir = new BehaviorSubject<Poder[]>(this.poderes);
  }

  getPoderes (){
    return this.behavoir.asObservable();
  }

  cambiarPoderes(poder:Poder){
    this.poderes.push(poder);
    this.behavoir.next(this.poderes);
  }
}
