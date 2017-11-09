import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  cargada_sn: boolean = false;
  equipo : any =  {};

  constructor( public http:Http ) {
    this.carga_info();
    this.carga_sobrenosotros();

  }

  public carga_info ( ) {

    this.http.get("assets/data/info.pagina.json")
      .subscribe( data => {
        //console.log(data.json());
        this.cargada = true;
        this.info = data.json();
      })

  }
  public carga_sobrenosotros (  ) {
    this.http.get("https://portafolioweb-f4219.firebaseio.com/equipo.json")
      .subscribe( data => {
        console.log(data.json());
        this.cargada_sn = true;
        this.equipo = data.json();
      })

  }

}
