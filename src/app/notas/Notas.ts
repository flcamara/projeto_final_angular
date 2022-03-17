//Classe

export class Notas{

    //Atributos
    public nomeAluno: string;
    public fnotaAluno: number;
    public snotaAluno: number;


    //Construtor
    constructor(nome: string, nota1: number, nota2: number){
        this.nomeAluno = nome;
        this.fnotaAluno = nota1;
        this.snotaAluno = nota2;

    }

}