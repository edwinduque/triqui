import { PartidaEO } from './entidades/partida';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
constructor(){
  this.partida = new PartidaEO();
}

  cleanPage():void{
    var cuadros = document.getElementsByClassName('square');
    this.partida = new PartidaEO();
    for ( var i = 0; i< cuadros.length; i++){
      cuadros[i].innerHTML="";
      cuadros[i].classList.remove('animated', 'bounce')
    }
    var lblResultado = document.getElementById("msgResultado");
    lblResultado.innerText = ""
    lblResultado.classList.remove('animated', 'flash');
  }
  partida: PartidaEO;
  
  fila:number;
  title = 'holamundo';

  OnLineSelected( partidaLinea: PartidaEO): void{
    console.log("line sel");
    this.partida = partidaLinea;
    if(this.partida.finalizada == false){
      this.validarGanador();
      if(this.partida.finalizada){
        var lblResultado = document.getElementById("msgResultado");
        var mensaje = "Partida finalizada - ";
        if(this.partida.huboGanador){
          var ganador ="O";
          if(this.partida.ganador == true){
            ganador = "X"
          }
          mensaje = mensaje + "Ganador: " + ganador;  
        }else{
          mensaje = mensaje + "No hubo ganador";
        }
        lblResultado.innerText = mensaje; 
        lblResultado.classList.add('animated', 'flash');
      }
    }

  }

  validarGanador(): void{
    var tablero = this.partida.tablero;
    if((tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0] != "")
    || (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3] != "")
    || (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6] != "")
    || (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0] != "")
    || (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1] != "")
    || (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2] != "")
    || (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0] != "")
    || (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2] != "")
    ){
      // Hubo un ganador
        this.partida.huboGanador = true;
        this.partida.finalizada = true;
        this.partida.ganador = !this.partida.turno;
        
    }else if( tablero[0] != ""  && tablero[1] != "" && tablero[2] != ""
           && tablero[3] != ""  && tablero[4] != "" && tablero[5] != ""
           && tablero[6] != ""  && tablero[7] != "" && tablero[8] != ""
    ){
       // Se llenó el tablero
       this.partida.finalizada = true;
       this.partida.huboGanador = false; 
    }

  }

}
