export class Time {
    constructor(nome,escudo){
        this.nome = nome;
        this.escudo = escudo;

        this.pontos = 0;
        this.gm = 0;
        this.gs = 0;
    }

    updateInfo(pontos,golsMarcados,golsSofridos){
        this.pontos += pontos;
        this.gm += golsMarcados;
        this.gs += golsSofridos;
    }
}