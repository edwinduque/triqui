export class PartidaEO{
turno: boolean;
posiciones: boolean[];
tablero : string[];
huboGanador: boolean;
ganador : boolean;
finalizada: boolean;

constructor(){
    this.turno = true;
    this.huboGanador = false;
    this.tablero = ["","", "", "", "", "", "", "", ""];
    this.finalizada = false;
}
}