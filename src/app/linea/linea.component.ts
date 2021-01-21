import { PartidaEO } from './../entidades/partida';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent implements OnInit {

  constructor() { }
  @Input() fila: number;
  @Input() partida: PartidaEO;
  @Output() selectedOnLine = new EventEmitter<PartidaEO>();

  onSelectedSquare(partidaGlobal : PartidaEO): void{
    this.partida = partidaGlobal
    this.selectedOnLine.emit(partidaGlobal);
  }

  ngOnInit() {
  }

}
