import { Injectable } from '@angular/core';
import { Notas } from './Notas';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor() { }

  //Vetor de boletim

  private vetorNotas: Notas[] = [
    new Notas("Fernando", 8, 7),
    new Notas("Lucas", 7, 7),
    new Notas("Antonio", 10, 5),
  ];

  //Cadastro de notas
  public cadastrar(notas:Notas){
    this.vetorNotas.push(notas)
  }

  //Selecão de notas
  public listar(){
    return this.vetorNotas
  }

  //Alteração de notas
  public alterar(id: number, notas:Notas){
    this.vetorNotas[id] = notas
  }

  //Exclusão de notas
  public excluir(id: number){
    this.vetorNotas.splice(id, 1)
  }
}
