import { PartidaEO } from './../entidades/partida';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent implements OnInit {

  constructor() { }

  @Input() columna:number;
  @Input() fila: number;
  @Input() partida: PartidaEO;
  @Output() selected = new EventEmitter<PartidaEO>(); 

  

 onSelectSquare(): void{
  var posicion = (3* (this.fila -1) + this.columna) -1;
  if(this.partida.tablero[posicion] == "" && this.partida.finalizada != true){
    var nuevoValor= "O";
    if(this.partida.turno){
      nuevoValor = "X";
    }
    this.partida.tablero[posicion] = nuevoValor;
    var div = document.getElementsByClassName("square");
    div[posicion].innerHTML = nuevoValor;
    div[posicion].classList.add('animated', 'bounce')
    //this.partida.posiciones[posicion] = true;
    this.partida.turno = !this.partida.turno;
    this.selected.emit(this.partida);
  }
  
 }

  ngOnInit() {
  }

}
