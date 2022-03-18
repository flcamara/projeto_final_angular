import { Component, OnInit } from '@angular/core';
import { Notas } from './Notas'
import { NotasService } from './notas.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  exibirStatus: boolean = false

  //Atributos
  public vetorNotas: any | Notas[];
  public notas: any | Notas;
  public id: any | number;
  public media: any | Notas[]
  public mensagem = ""

  constructor(private servico:NotasService) { }

  ngOnInit(): void {
    this.id = -1;
    this.notas = new Notas("",0,0);
    this.vetorNotas = this.servico.listar();
  }

  cadastrar(){
    this.servico.cadastrar(this.notas)
    this.notas = new Notas("",0,0)
  }

  excluir(id: number){
    this.servico.excluir(id)
    this.id = -1
  }

  editar(id: number){
    this.id = id;

    this.notas = new Notas(
      this.vetorNotas[id].nomeAluno,
      this.vetorNotas[id].fnotaAluno,
      this.vetorNotas[id].snotaAluno,
    );
  }

  atualizar(){
    this.servico.alterar(this.id, this.notas);
    this.notas = new Notas("",0,0)
    this.id = -1
  }

  status(id: number, mensagem: string){
    
    this.mensagem = mensagem
    if(this.vetorNotas[id].fnotaAluno + this.vetorNotas[id].snotaAluno < 14){
      this.mensagem = `Olá ${this.vetorNotas[id].nomeAluno}, seu resultado é: Reprovado`
    }else{
      this.mensagem = `Olá ${this.vetorNotas[id].nomeAluno}, seu resultado é: Aprovado`
    }
  }

  clickStatus(){
    this.exibirStatus = !this.exibirStatus
    this.exibirStatus = true
  }
}
